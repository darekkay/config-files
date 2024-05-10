#!/bin/bash

# List all packages with "samsung"
# adb shell pm list packages | findstr "samsung"

# Android Auto
adb shell pm uninstall -k --user 0 com.google.android.projection.gearhead.phonescreen
adb shell pm uninstall -k --user 0 com.google.android.projection.gearhead

# Camera Kit
adb shell pm uninstall -k --user 0 com.snap.camerakit.plugin.v1

# Google Duo
adb shell pm uninstall -k --user 0 com.google.android.apps.tachyon

# Private Share
adb shell pm uninstall -k --user 0 com.samsung.android.privateshare

# Samsung AR Zone
adb shell pm uninstall -k --user 0 com.samsung.android.arzone

# Samsung AR Emoji
adb shell pm uninstall -k --user 0 com.samsung.android.aremoji

# Samsung Cloud
adb shell pm uninstall -k --user 0 com.samsung.android.scloud

# Samsung Daily
adb shell pm uninstall -k --user 0 com.samsung.android.app.spage

# Samsung Emoji Stickers
adb shell pm uninstall -k --user 0 com.sec.android.mimage.avatarstickers

# Samsung Fitnessplatform
adb shell pm uninstall -k --user 0 com.samsung.android.service.health

# Samsung Game Booster
adb shell pm uninstall -k --user 0 com.samsung.android.game.gametools

# Samsung Game Launcher
adb shell pm uninstall -k --user 0 com.samsung.android.game.gamehome
adb shell pm uninstall -k --user 0 com.samsung.android.game.gos

# Samsung Game Optimizing Service
adb shell pm uninstall -k --user 0 com.samsung.android.game.gos

# Samsung Kids
adb shell pm uninstall -k --user 0 com.samsung.android.kidsinstaller
adb shell pm uninstall -k --user 0 com.samsung.android.app.camera.sticker.facearavatar.preload
adb shell pm uninstall -k --user 0 com.sec.android.app.kidshome

# Samsung Members
adb shell pm uninstall -k --user 0 com.samsung.android.voc

# Samsung Pay
adb shell pm uninstall -k --user 0 com.samsung.android.spayfw
adb shell pm uninstall -k --user 0 samsung.android.spay

# Samsung Pass
adb shell pm uninstall -k --user 0 com.samsung.android.samsungpassautofill
adb shell pm uninstall -k --user 0 com.samsung.android.authfw
adb shell pm uninstall -k --user 0 com.samsung.android.samsungpass

# Samsung Push Service
adb shell pm uninstall -k --user 0 com.sec.spp.push

# Samsung Smart Switch
adb shell pm uninstall -k --user 0 com.sec.android.easyMover

# Samsung Smart Things
adb shell pm uninstall -k --user 0 com.samsung.android.oneconnect

# Samsung Galaxy Themes
adb shell pm uninstall -k --user 0 com.samsung.android.themestore

# Samsung Galaxy Friends
adb shell pm uninstall -k --user 0 com.samsung.android.mateagent

# Samsung Visit In
adb shell pm uninstall -k --user 0 com.samsung.android.ipsgeofence

# Bixby
adb shell pm uninstall -k --user 0 com.samsung.android.bixby.wakeup
adb shell pm uninstall -k --user 0 com.samsung.android.app.spage
adb shell pm uninstall -k --user 0 com.samsung.android.app.routines
adb shell pm uninstall -k --user 0 com.samsung.android.app.settings.bixby
adb shell pm uninstall -k --user 0 com.samsung.android.bixby.service
adb shell pm uninstall -k --user 0 com.samsung.android.bixby.agent
adb shell pm uninstall -k --user 0 com.samsung.android.bixby.agent.dummy
adb shell pm uninstall -k --user 0 com.samsung.android.bixby.wakeup
adb shell pm uninstall -k --user 0 com.samsung.android.bixbyvision.framework
adb shell pm uninstall -k --user 0 com.samsung.android.visionintelligence
adb shell pm uninstall -k --user 0 com.samsung.systemui.bixby2

# Facebook
adb shell pm uninstall -k --user 0 com.facebook.katana
adb shell pm uninstall -k --user 0 com.facebook.system
adb shell pm uninstall -k --user 0 com.facebook.appmanager
adb shell pm uninstall -k --user 0 com.facebook.services

# Upday News
adb shell pm uninstall -k --user 0 de.axelspringer.yana.zeropage

# Begleiter für Ihr Smartphone - Link zu Windows
adb shell pm uninstall -k --user 0 com.microsoft.appmanager
