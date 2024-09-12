import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { networks } from './lib/data';
import NetworkCard from './ui/network-card';

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]'>
      <main>
        <section className='py-4 text-center'>
          <h1 className='text-xl'>Số điện thoại của bạn thuộc nhà mạng nào?</h1>
          <h2 className='text-xl'>hãy kiểm tra ở đây</h2>
        </section>
        <section className='px-3 py-4'>
          <label
            className='mb-3 mt-5 block font-medium text-gray-900'
            htmlFor='phone'
          >
            Số điện thoại:
          </label>
          <div className='relative'>
            <input
              className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500'
              id='phone'
              type='phone'
              name='phone'
              placeholder='Nhập số điện thoại của bạn tại đây'
              required
            />
            <DevicePhoneMobileIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
          </div>
        </section>
        <section>
          {networks.map((network, id) => (
            <NetworkCard network={network} key={id} />
          ))}
        </section>
        <section className='py-4'>
          <h2>Danh sách các nhà mạng tại Việt Nam</h2>
          <ul className='list-inside list-disc'>
            <li>Viettel</li>
            <li>Vinaphone</li>
            <li>MobiFone</li>
            <li>Vietnamobile</li>

            <li>Gmobile</li>
            <li>iTel (nhà mạng ảo, thuộc Indochina Telecom)</li>
            <li>Local (nhà mạng ảo, thuộc ASIM Telecom)</li>
            <li>Reddi (nhà mạng ảo, thuộc Masan Group)</li>
            <li>VNSKY (nhà mạng ảo, thuộc hệ sinh thái VNPAY)</li>
            <li>Wintel (nhà mạng ảo, thuộc Masan Group)</li>
          </ul>
        </section>
      </main>
      <footer className='row-start-3'>Nguyễn Tấn Khoa</footer>
    </div>
  );
}
