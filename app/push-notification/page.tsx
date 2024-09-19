'use client';

import { useState, useEffect } from 'react';
import {
  subscribeUser,
  unsubscribeUser,
  sendNotification,
} from '@/app/actions';

import clsx from 'clsx';

const buttonClassname = clsx(
  'border border-gray-800 px-2 py-1 active:bg-gray-200 transition-colors duration-75 rounded-md',
);
function urlBase64ToUint8Array(base64String: string) {
  console.log(base64String);
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream,
    );

    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <div>
      <h3>Install App</h3>
      <button className={buttonClassname} onClick={() => console.log('abc')}>
        Add to Home Screen
      </button>
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button
          <span role='img' aria-label='share icon'>
            {' '}
            ⎋{' '}
          </span>
          and then &quot;Add to Home Screen&quot;.
          <span role='img' aria-label='plus icon'>
            {' '}
            ➕{' '}
          </span>
          .
        </p>
      )}
    </div>
  );
}

function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  );
  const [message, setMessage] = useState('');

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    // trigger build
    try {
      const registration = await navigator.serviceWorker.ready;
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
        ),
      });
      setSubscription(sub);
      await subscribeUser(sub.toJSON());
    } catch (error) {
      console.error(error);
      alert(
        'Error subscribing to push notifications: ' +
          JSON.stringify(error, null, 2),
      );
    }
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  }

  async function sendTestNotification() {
    if (subscription) {
      setTimeout(async () => {
        await sendNotification(message);
        setMessage('');
      }, 5000);
    }
  }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      <h3>Push Notifications</h3>
      {subscription ? (
        <>
          <p>You are subscribed to push notifications.</p>
          <button className={buttonClassname} onClick={unsubscribeFromPush}>
            Unsubscribe
          </button>
          <input
            type='text'
            placeholder='Enter notification message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={buttonClassname} onClick={sendTestNotification}>
            Send Test
          </button>
        </>
      ) : (
        <>
          <p>You are not subscribed to push notifications.</p>
          <button className={buttonClassname} onClick={subscribeToPush}>
            Subscribe
          </button>
        </>
      )}
    </div>
  );
}

export default function PushNotificationPage() {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]'>
      <main>
        <PushNotificationManager />
        <InstallPrompt />
      </main>
      <footer className='row-start-3'>Nguyễn Tấn Khoa</footer>
    </div>
  );
}
