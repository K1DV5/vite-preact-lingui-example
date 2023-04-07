import './app.css'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { t, Trans } from "@lingui/macro";


const locales = ['en', 'am']
let currentLocale = 'en'

async function activateLocale(locale) {
    const { messages } = await import(`./locales/${locale}.po`);
    i18n.load(locale, messages)
    i18n.activate(locale)
    currentLocale = locale
}

activateLocale('en')

export function App() {
    return (
        <I18nProvider i18n={i18n}>
            <div>
                <button onClick={() => activateLocale(locales.find(l => l !== currentLocale))}>Change locale</button>
                <div>t: {t`Ola!`}</div>
                <div>Trans: <Trans>Ola!</Trans></div>
            </div>
        </I18nProvider>
    )
}
