import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'photographs',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Photographs',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'bfff2eb8-84d2-5740-8e2c-17b970a1f6dc',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'aabb4c5f-7b18-5d94-a2c9-d82eb2eb1616',
    dynasty: {
      item: '0758a11b-67ab-5ddc-a953-275a1d7a45b8',
      name: 'Ottomans',
    },
    timeline: {
      code: 'tr',
      id: 'tur',
      country: 'Türkiye',
    },
    partner: {
      id: 'f4b9cc0b-85a9-57a3-8bbc-d3741afcb48f',
      name: 'Museum of Applied Art',
      city: 'Belgrade',
      country: 'Serbia',
      objects: 4,
    },
  },
})
