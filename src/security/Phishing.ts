/**
 * Based on: https://github.com/openhive-network/condenser/blob/master/src/app/utils/Phishing.js
 */

const domains = [
    'steewit.com',
    'śteemit.com',
    'ŝteemit.com',
    'şteemit.com',
    'šteemit.com',
    'sţeemit.com',
    'sťeemit.com',
    'șteemit.com',
    'sleemit.com',
    'aba.ae',
    'autobidbot.cf',
    'autobidbot.ga',
    'autobidbot.gq',
    'autobotsteem.cf',
    'autobotsteem.ga',
    'autobotsteem.gq',
    'autobotsteem.ml',
    'autosteem.info',
    'autosteembot.cf',
    'autosteembot.ga',
    'autosteembot.gq',
    'autosteembot.ml',
    'autosteemit.wapka.mobi',
    'boostbot.ga',
    'boostbot.gq',
    'boostwhaleup.cf',
    'cutt.us',
    'dereferer.me',
    'eb2a.com',
    'lordlinkers.tk',
    'nullrefer.com',
    'steeemit.ml',
    'steeemitt.aba.ae',
    'steemart.ga',
    'steemautobot.bid',
    'steemautobot.cf',
    'steemautobot.trade',
    'steemers.aba.ae',
    'steemiit.cf',
    'steemiit.ga',
    'steemij.tk',
    'steemik.ga',
    'steemik.tk',
    'steemil.com',
    'steemil.ml',
    'steemir.tk',
    'steemitou.co.nf',
    'steemitservices.ga',
    'steemitservices.gq',
    'steemiz.tk',
    'steemnow.cf',
    'steemnow.ga',
    'steemnow.gq',
    'steemnow.ml',
    'steempostupper.win',
    'steemrewards.ml',
    'steemrobot.ga',
    'steemrobot.ml',
    'steemupgot.cf',
    'steemupgot.ga',
    'steemupgot.gq',
    'steemupper.cf',
    'steemupper.ga',
    'steemupper.gq',
    'steemupper.ml',
    'steenit.cf',
    'stemit.com',
    'stssmater.aba.ae',
    'uppervotes.ga',
    'uppervotes.gq',
    'upperwhaleplus.cf',
    'upperwhaleplus.ga',
    'upperwhaleplus.gq',
    'upvoteme.cf',
    'upvoteme.ga',
    'upvoteme.gq',
    'upvoteme.ml',
    'url.rw',
    'us.aba.ae',
    'whaleboostup.ga',
    'whaleboostup.ml'
];

export class Phishing {
    /**
     * Does this URL look like a phishing attempt?
     *
     * @param {string} questionableUrl
     * @returns {boolean}
     */
    public static looksPhishy = (questionableUrl: string) => {
        for (const domain of domains) {
            if (questionableUrl.toLocaleLowerCase().indexOf(domain) > -1) return true;
        }

        return false;
    };
}
