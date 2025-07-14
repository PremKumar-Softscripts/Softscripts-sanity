// schemas/index.js

import page from './page'
import builderBlock from './builderBlock'

// Import blocks
import heroSection from './blocks/heroSection'
import textBlock from './blocks/textBlock'
import imageBlock from './blocks/imageBlock'
import videoBlock from './blocks/videoBlock'
import buttonBlock from './blocks/buttonBlock'
import footerSetting from './footerSettings'
import menu from './blocks/menu'
import menuitem from './blocks/menuitem'
import post from './blocks/post'
import siteSettings from './siteSettings'
import {FaCog} from 'react-icons/fa'
// import mediaAsset from './blocks/mediaAsset'
import category from './blocks/category'
import cardSection from './blocks/cardSection'
import event from './event'
import eventRegistration from './eventRegistration'
import message from './message'
import contactRegistration from './contactRegistration'
import imageWithText from './blocks/imageWithText'
import liveService from './liveService'
import hopeGroup from './hopeGroup'
import career from './career'
export const schemaTypes = [
  siteSettings,
  menu,
  menuitem,
  footerSetting,
  page,
  post,
  builderBlock,
  heroSection,
  textBlock,
  imageBlock,
  videoBlock,
  buttonBlock,
  cardSection,
  // mediaAsset,
  event,
  eventRegistration,
  category,
  message,
  contactRegistration,
  imageWithText,
  liveService,
  hopeGroup,
  career
]
