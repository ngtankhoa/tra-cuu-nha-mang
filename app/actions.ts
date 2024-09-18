'use server';

import webpush from 'web-push';
import type { PushSubscription } from 'web-push';

declare global {
  // eslint-disable-next-line no-var
  var subscription: PushSubscriptionJSON | null;
}

webpush.setVapidDetails(
  'mailto:khoant.uit@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

globalThis.subscription = globalThis.subscription || null;

export async function subscribeUser(sub: PushSubscriptionJSON) {
  console.log('subscribeUser');
  globalThis.subscription = sub;
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true };
}

export async function unsubscribeUser() {
  console.log('unsubscribeUser');
  globalThis.subscription = null;
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}

export async function sendNotification(message: string) {
  if (
    !globalThis.subscription ||
    !globalThis.subscription.endpoint ||
    !globalThis.subscription.keys
  ) {
    throw new Error('No subscription available');
  }
  const convertObject: PushSubscription = {
    endpoint: globalThis.subscription.endpoint || '',
    keys: {
      p256dh: globalThis.subscription.keys.p256dh,
      auth: globalThis.subscription.keys.auth,
    },
  };

  try {
    await webpush.sendNotification(
      convertObject,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/icon.png',
      }),
    );
    return { success: true };
  } catch (error) {
    console.error('Error sending push notification:', error);
    return { success: false, error: 'Failed to send notification' };
  }
}
