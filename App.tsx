import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'


export default function App(): JSX.Element {
	return (
		<SafeAreaView style={[styles.safeAreaView]}>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	}
})