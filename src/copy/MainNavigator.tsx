import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
// import Home from './Home'

export default function MainNavigator(): JSX.Element {
	const [index, setIndex] = useState<number>(0)
	const [routes] = useState([
		{ key: 'home', title: 'Home', icons: 'home' }
	])
	const renderScene = BottomNavigation.SceneMap({
		//home: Home
	})
	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	)
}