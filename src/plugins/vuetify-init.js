import 'vuetify/src/stylus/app.styl';
import Vue from 'vue';

import Vuetify, {
  VApp,
  VBtn,
  VContent,
  VContainer,
  VLayout,
  VFlex,
  VCard,
  VCardTitle,
  VCardActions,
  VImg,
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition,
  // used by chatty-flow-editor
  VTooltip,
  VTimeline,
  VTimelineItem,
  VDialog,
  VCardText,
  VDivider,
  VSpacer,
  VIcon,
  VSubheader,
  VMenu,
  VForm,
  VSlider,
  VTextField,
  VTextarea,
  VAlert,
  VList,
  VListTile,
  VListTileContent,
  VListTileAction,
  VListTileTitle,
  VListTileSubTitle,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VContent,
    VContainer,
    VCard,
    VCardTitle,
    VCardActions,
    VLayout,
    VFlex,
    VImg,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition,
    // used by chatty-flow-editor
    VTooltip,
    VTimeline,
    VTimelineItem,
    VDialog,
    VCardText,
    VDivider,
    VSpacer,
    VIcon,
    VSubheader,
    VMenu,
    VForm,
    VSlider,
    VTextField,
    VTextarea,
    VAlert,
    VList,
    VListTile,
    VListTileContent,
    VListTileAction,
    VListTileTitle,
    VListTileSubTitle,
  },
  directives: {
    Ripple,
  },
});