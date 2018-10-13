import connect from './connect';
import connectMapDispatch from './connect-map-dispatch-to-props';
import connectMapState from './connect-map-state-to-props';
import connectMergeProps from './connect-merge-props';
import disconnect from './disconnect';
import disconnectMapDispatch from './disconnect-map-dispatch-to-props';
import disconnectMapState from './disconnect-map-state-to-props';
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
