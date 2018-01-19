ios:
	cd ./ios && pod install
	bundle exec fastlane ios build

android:
	bundle exec fastlane android build

.PHONY: ios android
