import React from 'react';

export default [
  {
    id: 'connect',
    name: 'Connect component',
    description: (
      <div>
        Connects a component to redux store and generates
        both <code>mapStateToProps</code> & <code>mapDispatchToProps</code>.
      </div>
    )
  },
  {
    id: 'connect-with-map-dispatch',
    name: 'Connect component (mapDispatchToProps)',
    description: (
      <div>
        Connects a component to redux store and generates <code>mapDispatchToProps</code> only.
      </div>
    )
  },
  {
    id: 'connect-with-map-state',
    name: 'Connect component (mapStateToProps)',
    description: (
      <div>
        Connects a component to redux store and generates <code>mapStateToProps</code> only.
      </div>
    )
  },
  {
    id: 'disconnect',
    name: 'Disconnect component',
    description: (
      <div>
        Disconnects a component from redux store and removes
        both <code>mapStateToProps</code> & <code>mapDispatchToProps</code>.
      </div>
    )
  },
  {
    id: 'disconnect-map-dispatch',
    name: 'Disconnect component (mapDispatchToProps)',
    description: (
      <div>
        Disconnects <code>mapDispatchToProps</code> from a component connected to a redux store.
        Disconnects completely if possible.
      </div>
    )
  },
  {
    id: 'disconnect-map-state',
    name: 'Disconnect component (mapStateToProps)',
    description: (
      <div>
        Disconnects <code>mapStateToProps</code> from a component connected to a redux store.
        Disconnects completely if possible.
      </div>
    )
  }
];
