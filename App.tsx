import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import MainNavigator from './src/screens/MainNavigator'


export default function App(): JSX.Element {
	return (
		<SafeAreaView style={[styles.safeAreaView]}>
			<MainNavigator />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	}
})