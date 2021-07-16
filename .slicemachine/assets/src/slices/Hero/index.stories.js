import MyComponent from '../../../../../src/slices/Hero';

export default {
  title: 'src/slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"hero","items":[],"primary":{"title":[{"type":"heading1","text":"Drive out-of-the-box models","spans":[]}],"description":[{"type":"paragraph","text":"Et esse incididunt consectetur commodo. Culpa aliquip reprehenderit ut cillum duis. Irure amet eu laborum sit tempor consectetur et culpa.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _WithBackground = () => <MyComponent slice={{"variation":"withBackground","name":"With Background","slice_type":"hero","items":[],"primary":{"title":[{"type":"heading1","text":"Engineer next-generation users","spans":[]}],"description":[{"type":"paragraph","text":"Adipisicing aute occaecat minim officia labore. Lorem officia elit commodo non velit elit proident commodo id qui id voluptate est. Aliqua qui dolor qui.","spans":[]}],"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"}},"id":"_WithBackground"}} />
_WithBackground.storyName = 'With Background'
