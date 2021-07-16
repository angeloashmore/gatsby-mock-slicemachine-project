import MyComponent from '../../../../../src/slices/CallToAction';

export default {
  title: 'src/slices/CallToAction'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Embrace 24/7 portals","spans":[]}],"description":[{"type":"paragraph","text":"Cillum nostrud nostrud dolore commodo mollit do culpa in occaecat. Eu commodo veniam consequat incididunt consectetur enim qui fugiat fugiat proident aute ullamco laborum.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _WithButton = () => <MyComponent slice={{"variation":"withButton","name":"With Button","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Transform transparent web services","spans":[]}],"description":[{"type":"paragraph","text":"Esse et ut anim veniam velit. Deserunt in enim sint magna voluptate do veniam adipisicing officia officia sit culpa nostrud.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://google.com"},"buttonText":[{"type":"paragraph","text":"Proident commodo sit id. Labore labore ex voluptate consectetur reprehenderit aute magna anim voluptate do qui dolore officia anim. Cupidatat duis aliquip sit proident.","spans":[]}]},"id":"_WithButton"}} />
_WithButton.storyName = 'With Button'
