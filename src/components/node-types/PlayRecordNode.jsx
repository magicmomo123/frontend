import { useCallback } from 'react';
import React, { useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import Select from 'react-select'

import '../../text-updater-node.css';

function PlayRecordNode({ data }) {
// Can pass in input file as string 
  // Show directory of available files to user
// Can pass in output file as string name without extra formatting. It will be a named directory with all the recordings 
// Duration is in seconds (how long record for)
// Sample rate, rate at which to take samples: default is 48,000
// Input mapping: specify from which channels to record
// Output mapping: specify from which channels to play sound from

  const availableChannels = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
    {value: 6, label: "6"},
    ]

  const [inputFile, setInputFile] = useState("")
  const onInputFileChange = useCallback((evt) => {
    setInputFile(evt.target.value);
    data.inputFile = evt.target.value
  }, []);
  const [inputChannels, setInputChannels] = useState([])
  const onInputChannelsChange = useCallback((evt) => {
    console.log(JSON.stringify(evt))
    setInputChannels(Array.from(evt, item => item.value));
    data.inputChannels = Array.from(evt, item => item.value)
  }, []);
  const [outputFile, setOutputFile] = useState("temp")
  const onOutputFileChange = useCallback((evt) => {
    setOutputFile(evt.target.value);
    data.outputFile = evt.target.value
  }, []);
  const [outputChannels, setOutputChannels] = useState([])
  const onOutputChannelsChange = useCallback((evt) => {
    console.log(JSON.stringify(evt))
    setOutputChannels(Array.from(evt, item => item.value));
    data.outputChannels = Array.from(evt, item => item.value)
  }, []);
  const [duration, setDuration] = useState(5)
  const onDurationChange = useCallback((evt) => {
    setDuration(evt.target.value);
    data.duration = evt.target.value
  }, []);
  const [sampleRate, setSampleRate] = useState(480000)
  const onSampleRateChange = useCallback((evt) => {
    setSampleRate(evt.target.value);
    data.sampleRate = evt.target.value
  }, []);
 


  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <h6>Play Record Controller</h6>
        <form>
        <label htmlFor="text">Sound(s) Name(s):  </label>
        <input id="text" name="text" value={inputFile} onChange={onInputFileChange} />
        <br />
        <label htmlFor="selector">Mic Channels: </label>
        <Select isMulti={true} options={availableChannels} onChange={onInputChannelsChange}/>
        <br />
        <label htmlFor="text">Output File Name:  </label>
        <input id="text" name="text" value={outputFile} onChange={onOutputFileChange} />
        <br />
        <label htmlFor="selector">Speaker Channels: </label>
        <Select isMulti={true} options={availableChannels} onChange={onOutputChannelsChange}/>
        <br/>
        <label htmlFor="text">Duration:  </label>
        <input id="text" name="text" value={duration} onChange={onDurationChange} />
        <br />
        <br />
        <label htmlFor="text">Sample Rate Change:  </label>
        <input id="text" name="text" value={sampleRate} onChange={onSampleRateChange} />
        </form>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default PlayRecordNode;