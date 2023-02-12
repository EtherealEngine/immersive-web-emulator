/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Events triggered by the emulator UI and sent to the content script
 */
export const EMULATOR_ACTIONS = {
	HEADSET_POSE_CHANGE: 'ea-headset-pose-change',
	CONTROLLER_POSE_CHANGE: 'ea-controller-pose-change',
	BUTTON_STATE_CHANGE: 'ea-button-state-change',
	ANALOG_VALUE_CHANGE: 'ea-analog-value-change',
	DEVICE_TYPE_CHANGE: 'ea-device-type-change',
	STEREO_TOGGLE: 'ea-stereo-toggle',
	KEYBOARD_EVENT: 'ea-keyboard-event',
	ROOM_SETUP_TOGGLE: 'ea-room-setup-toggle',
	EXIT_IMMERSIVE: 'ea-exit-immersive',
};

/**
 * Events triggered by the content script and caught and processed by the custom WebXR Polyfill
 */
export const POLYFILL_ACTIONS = {
	HEADSET_POSE_CHANGE: 'pa-headset-pose-change',
	CONTROLLER_POSE_CHANGE: 'pa-controller-pose-change',
	BUTTON_STATE_CHANGE: 'pa-button-state-change',
	ANALOG_VALUE_CHANGE: 'pa-analog-value-change',
	DEVICE_TYPE_CHANGE: 'pa-device-type-change',
	STEREO_TOGGLE: 'pa-stereo-toggle',
	ROOM_SETUP_TOGGLE: 'pa-room-setup-toggle',
	KEYBOARD_EVENT: 'pa-keyboard-event',
	EXIT_IMMERSIVE: 'pa-exit-immersive',
	DEVICE_INIT: 'pa-device-init',
};

/**
 * Events triggered from the client side that are caught by the content script and then relayed back to the emulator side
 */
export const CLIENT_ACTIONS = {
	ENTER_IMMERSIVE: 'ca-enter-immersive',
	EXIT_IMMERSIVE: 'ca-exit-immersive',
};
