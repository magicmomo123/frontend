export const nodeTypesMap = {
    'headControl' : 'Head Control Node',
    'railControl' : 'Rail Control Node',
    'playRecord' : 'Play Record Node',
    'forLoop' : 'For Loop Node'
}

export const robotNodeTypes = [
    'head',
    'rail'
]

export const nodeDefaultData = {
  'headControl': {
    degrees: 0, 
    direction: "cw"
  }, 
  'railControl': {
    metStep: 0
  }, 
  'playRecord': {
    inputFile: "",
    inputChannels: [],
    outputFile: "temp",
    outputChannels: []
  }, 
  'forLoop': {
    firstIndex: 0,
    lastIndex: 1,
    robotType: ""
  }, 
  'start': {}
}