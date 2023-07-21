<script setup>
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en'
import '@formatjs/intl-relativetimeformat/locale-data/de'

const unsupportedLocales = ['uz']

async function loadLocale(locale) {
  // This locale is supported
  if (!unsupportedLocales.includes(locale)) {
    return
  }
  // Load the polyfill 1st BEFORE loading data
  await import('@formatjs/intl-datetimeformat/polyfill-force')
  // Parallelize CLDR data loading
  const dataPolyfills = [
    import('@formatjs/intl-datetimeformat/add-all-tz'),
    import(`@formatjs/intl-datetimeformat/locale-data/${locale}.js`),
  ]
  await Promise.all(dataPolyfills)
}

loadLocale('uz').then(() => {
  const formatter = new Intl.DateTimeFormat('uz', { month: 'long' })
  const month1 = formatter.format(new Date())
  const month2 = formatter.format(new Date(2003, 5, 12))
  console.log(`${month1} and ${month2}`)
  localStorage.setItem('months', JSON.stringify([month1, month2]))
})
const month = JSON.parse(localStorage.getItem('months'))
</script>

<template>
  <div>
    {{ month }}
    <router-view />
  </div>
</template>
