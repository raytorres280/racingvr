import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  View,
  Model,
  AmbientLight,
  PointLight,
  NativeModules,
  Scene,
	Text
} from 'react-vr';
import Tree from './components/Tree';
import Walk from 'react-vr-walk'

export default class HelloWorld extends React.Component {
  handleInput(e) {
    // console.log(e.handler)
    console.log(e.target)
  }
  render() {
    return (
			<Walk panoSource={asset('heaven.png')}
            speed={1}>
						<Scene
			      onInput={(e) => this.handleInput(e)}
			      onMove={() => console.log('detected camera move')}
			      onEnter={() => console.log('onenter scene detected')}
			      >
			        <AmbientLight intensity={0.4} />
			        <PointLight
			          style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}
			        />
			        {/* <Pano source={asset('heaven.png')} /> */}
			        <Tree
			          style={{
			            transform: [{translate: [0, -1, -5]}],
			          }}
			        />
			        <Tree
			          style={{
			            transform: [{translate: [5, -1, -5]}],
			          }}
			        />
			        <Model
			          source={{obj: asset('plane.obj'), mtl: asset('plane.mtl')}}
			          lit
			          style={{
			            transform: [{scale: [1, 1, 1]}, {translate: [0, -1, 0]}],
			          }}
			        />
			      </Scene>
      </Walk>

    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
