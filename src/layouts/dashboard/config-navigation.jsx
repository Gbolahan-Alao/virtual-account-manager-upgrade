import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'accounts',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'transactions',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'settings',
    path: '/settings',
    icon: <SettingsSuggestIcon/>
  }
 
];

export default navConfig;
