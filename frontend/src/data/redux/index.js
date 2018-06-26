import connect from './connect';
import connectMapDispatch from './connect-map-dispatch';
import connectMapState from './connect-map-state';
import connectMergeProps from './connect-merge-props';
import disconnect from './disconnect';
import disconnectMapDispatch from './disconnect-map-dispatch';
import disconnectMapState from './disconnect-map-state';
import disconnectMergeProps from './disconnect-merge-props';

export default [
  connect,
  connectMapDispatch,
  connectMapState,
  connectMergeProps,
  disconnect,
  disconnectMapDispatch,
  disconnectMapState,
  disconnectMergeProps
];
