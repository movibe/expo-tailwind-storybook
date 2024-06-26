/* eslint-disable no-undef */
const path = require('path')
const { getDefaultConfig } = require('expo/metro-config')
const { generate } = require('@storybook/react-native/scripts/generate')

const isStorybook = process.env.STORYBOOK_ENABLED === 'true'

generate({
  configPath: path.resolve(__dirname, './.ondevice'),
})

const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.transformer.unstable_allowRequireContext = true

defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(context, moduleName, platform)

  if (isStorybook) {
    defaultResolveResult?.filePath?.includes?.('.ondevice/')
  }

  return defaultResolveResult
}

module.exports = defaultConfig
