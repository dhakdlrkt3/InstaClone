import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import LifeCycle from './LifeCycle'
import Timer from './Timer'
import Interval from './Interval'
import Fetch from './Fetch'

export default function MainNavigator(): JSX.Element {
	const [index, setIndex] = useState<number>(0)
	const [routes] = useState([
		{ key: 'life', title: 'LifeCycle', icons: 'page-layout-header-footer' },
		{ key: 'timer', title: 'Timer', icons: 'clock-timer-four' },
		{ key: 'interval', title: 'Interval', icons: 'timerline' },
		{ key: 'fetch', title: 'Fetch', icons: 'history' }
	])
	const renderScene = BottomNavigation.SceneMap({
		life: LifeCycle,
		timer: Timer,
		Interval: Interval,
		fetch: Fetch,
	})
	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	)
}