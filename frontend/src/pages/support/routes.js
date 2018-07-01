import Contact from './contact';
import Idea from './idea';
import Issue from './issue';

export default [
  { color: 'danger', label: 'Report an issue', to: '/support/issue', Component: Issue },
  { color: 'success', label: 'Submit an idea', to: '/support/idea', Component: Idea },
  { color: 'primary', label: 'Contact us', to: '/support/contact', Component: Contact }
];
