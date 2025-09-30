const utils = require('./helpers/utils.js');
const csv = require('./helpers/csvModule.js')
const { SwarmExperiment, ExtendedSwarmExperiment } = require('./helpers/dfs/experiments');


// const {} =


(async () => {
    const swarm = new ExtendedSwarmExperiment({ keepStats: true, data: {start: '4kb', maxStringSize: '16kb'} });

    // upload
    const results = await swarm.uploadStrings();
    console.log(results)

    console.log(await swarm.isLocalChunk(results[0]))
    swarm.deleteLocalChunk(results[0]).then(() => console.log('chunk deleted'))
    
    const id = await swarm.getId()
    console.log(await swarm.peerReachable(id))
    
    await swarm.disconnectFromPeer('676790fcae312292ffc17b7f7c84d5b9acc51ef0ea3f27d0ff3bada3362abc5d')
    // retrieve
    // const hashes = utils.dfs.getIdentifiers('swarm');
    await swarm.downloadStrings(results);

})();


// uncomment to compute average retrieval latency of a folder's csv records
// csv.average('csv_records/27-03-2022/')
