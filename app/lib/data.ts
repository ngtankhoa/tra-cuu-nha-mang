import { Network } from './definitions'

export const networks: Network[] = [
  {
    name: 'Viettel',
    logo: '/network-logo/viettel.svg',
    description: 'Viettel là nhà cung cấp dịch vụ di động lớn nhất tại Việt Nam.',
    prefixes: ['086', '096', '097', '098'],
    status: 'Active',
  },
  {
    name: 'Vinaphone',
    description: 'Vinaphone là một trong những công ty viễn thông lớn tại Việt Nam.',
    prefixes: ['088', '091', '094'],
    status: 'Active',
  },
  {
    name: 'Mobifone',
    description: 'Mobifone là một trong những nhà cung cấp dịch vụ di động đầu tiên tại Việt Nam.',
    prefixes: ['089', '090', '093'],
    status: 'Active',
  },
  {
    name: 'Vietnamobile',
    description: 'Vietnamobile là một nhà mạng đang phát triển tại Việt Nam, tập trung vào đối tượng người dùng trẻ.',
    prefixes: ['092', '056', '058'],
    status: 'Active',
  },
  {
    name: 'Gmobile',
    description: 'Gmobile nổi tiếng với các dịch vụ di động giá cả phải chăng.',
    prefixes: ['099', '059'],
    status: 'Active',
  },
  {
    name: 'S-Fone',
    description: 'S-Fone là nhà cung cấp dịch vụ CDMA đầu tiên tại Việt Nam, nhưng đã ngừng hoạt động.',
    prefixes: ['095'],
    status: 'Closed',
  },
  {
    name: 'Beeline',
    description: 'Beeline là liên doanh giữa VimpelCom và Gtel Mobile, hiện đã đổi tên thành Gmobile.',
    prefixes: ['099'],
    status: 'Closed',
  },
  {
    name: 'Cityphone',
    description:
      'Cityphone là một mạng WLL (hệ thống điện thoại không dây cố định) tại Hà Nội và TP. Hồ Chí Minh, nhưng đã ngừng hoạt động.',
    prefixes: ['095'],
    status: 'Closed',
  },
  {
    name: 'EVN Telecom',
    description: 'EVN Telecom thuộc Tập đoàn Điện lực Việt Nam, nhưng đã sáp nhập với Viettel.',
    prefixes: ['096'],
    status: 'Closed',
  },
  {
    name: 'SFone',
    description: 'SFone là một dịch vụ CDMA khác tại Việt Nam, mạng này cũng đã ngừng hoạt động.',
    prefixes: ['095'],
    status: 'Closed',
  },
  {
    name: 'Vietnammobile (former CDMA)',
    description: 'Vietnammobile từng là một nhà cung cấp CDMA trước khi chuyển sang công nghệ GSM.',
    prefixes: ['092'],
    status: 'Closed',
  },
]
