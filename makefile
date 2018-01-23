ios:
	npm install
	bundle install
	bundle exec fastlane ios build

android:
	npm install
	bundle exec fastlane android build

.PHONY: ios android
