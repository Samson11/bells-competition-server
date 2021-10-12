const express = require('express')
const { getList } = require('./helpers')

const app = express()

app.get('/', (req, res) => res.send('Server is up'))

app.get('/lists', (req, res) => {
    const lists = getList();
    res.send(lists)
})

app.get('/attention', (req, res) => {
    const loremData = [
        { id: 1, data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 2, data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 3, data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 4, data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 5, data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ];
    res.send({
        status: 'success',
        data: loremData,
    });
})

app.get('/news', (req, res) => {
    const news = [
        {
            "title": "Elon Musk hosts Dogecoin themed party after SNL show",
            "link": "https://www.thenews.com.pk/latest/833818-elon-musk-hosts-dogecoin-themed-party-after-snl-show",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "Elon Musk makes several jokes about Dogecoin during his SNL hosting gig",
            "content": null,
            "pubDate": "2021-05-11 11:13:00",
            "image_url": null,
            "source_id": "thenews"
        },
        {
            "title": "Avoid the Dogecoin Crash by Buying These 2 Growth Stocks Instead",
            "link": "https://www.fool.com/investing/2021/05/11/avoid-the-dogecoin-crash-by-buying-these-2-growth/?source=iedfolrf0000001",
            "keywords": null,
            "creator": [
                "newsfeedback@fool.com (Alex Carchidi)"
            ],
            "video_url": null,
            "description": "Dogecoin may be breaking its all-time highs every other day, but there's nothing averting a catastrophic fall.",
            "content": "If you want to send someone on a wild goose chase, send them to find a serious investor who's willing to state on the record that Dogecoin (CRYPTO: DOGE) is a surefire long-term investment. Dogecoin may be fun to buy, but it's unlikely be popular forever, and there's next to zero intrinsic value propping up the cryptocurrency's value. That means if you're trying to plan for retirement or just hope to be wealthier five years from now, you'll need to find a steadier investment.If speculating on cryptocurrencies isn't your style, investing in a diversified mix of growth stocks might do the trick. The pair of growth stocks that I'll discuss today probably won't go to the moon anytime soon, but they won't lose their value overnight, either. Image source: Getty ImagesContinue reading",
            "pubDate": "2021-05-11 10:51:01",
            "image_url": null,
            "source_id": "fool"
        },
        {
            "title": "Dogecoin Rap: Check Out This Fun Song That Charts the Cryptocurrency's Story",
            "link": "https://gadgets.ndtv.com/internet/news/dogecoin-rap-cryptocurrency-song-price-rally-elon-musk-saturday-night-live-2439548",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "Dogecoin Rap, written and performed by Remy, is a fun song that has gone viral on YouTube with over 218,000 views within a couple of weeks since its release. Thanks to support from industry leaders...",
            "content": null,
            "pubDate": "2021-05-11 10:18:09",
            "image_url": "https://i.gadgets360cdn.com/large/dogecoin_bloomberg_small_1613366240619.jpg",
            "source_id": "ndtv"
        },
        {
            "title": "Watch: This Rap About Dogecoin Takes Internet By Storm",
            "link": "https://gadgets.ndtv.com/internet/news/dogecoin-rap-new-song-about-cryptocurrency-takes-internet-by-storm-2439548",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "It was billionaire Elon Musk, who until now regularly talked about Dogecoin, a cryptocurrency that began as a meme joke, but now is worth $93.38 billion. And now a \"Dogecoin Rap\", written and...",
            "content": null,
            "pubDate": "2021-05-11 10:18:09",
            "image_url": "https://i.gadgets360cdn.com/large/dogecoin_bloomberg_small_1613366240619.jpg",
            "source_id": "ndtv"
        },
        {
            "title": "Tesla Falls as China Sales Dip, Musk Polls Followers on Dogecoin",
            "link": "https://ca.finance.yahoo.com/news/tesla-falls-china-sales-dip-101523920.html",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": null,
            "content": null,
            "pubDate": "2021-05-11 10:15:23",
            "image_url": "https://s.yimg.com/uu/api/res/1.2/hyrJ.eDEYJafWfUWdreJqg--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_markets_842/7356a2a6fb28ffa28a99282d3e35b588",
            "source_id": "yahoo"
        },
        {
            "title": "7 Reasons to Ditch Dogecoin and Buy These Stocks Right Now",
            "link": "https://www.fool.com/investing/2021/05/11/7-reasons-to-ditch-dogecoin-and-buy-these-stocks/?source=iedfolrf0000001",
            "keywords": null,
            "creator": [
                "newsfeedback@fool.com (Sean Williams)"
            ],
            "video_url": null,
            "description": "This joke-inspired digital currency isn't worth your hard-earned money- but these superior stocks are.",
            "content": "There are a number of ways to retire wealthy. Over the long run, investing in the stock market has been one of the most-effective ways of accomplishing this feat.Since 1980, the widely followed S&P 500 has delivered an average annual total return (including dividends) of slightly better than 11%. This means it's taking less than seven years, with dividend reinvestment, for investors to double their money with an S&P 500 tracking index.But over the past decade, it's not stocks that have led assets in the win column. That distinction belongs to cryptocurrencies. At the moment, none is garnering more buzz than the joke-inspired Dogecoin (CRYPTO: DOGE).Continue reading",
            "pubDate": "2021-05-11 10:13:51",
            "image_url": null,
            "source_id": "fool"
        },
        {
            "title": "Dogecoin Reclaims Spot As Fourth Most Valuable Cryptocurrency After Elon Musk Fuels Speculation Tesla Could Accept It As Payment",
            "link": "https://www.forbes.com/sites/roberthart/2021/05/11/dogecoin-reclaims-spot-as-fourth-most-valuable-cryptocurrency-after-elon-musk-fuels-speculation-tesla-could-accept-it-as-payment/",
            "keywords": [
                "Business",
                "/business",
                "Business",
                "/business",
                "Policy",
                "/policy",
                "Transportation",
                "/transportation",
                "Leadership",
                "/leadership",
                "Money",
                "/money",
                "Crypto & Blockchain",
                "/crypto-blockchain",
                "Innovation",
                "/innovation",
                "Social Media",
                "/social-media",
                "Breaking",
                "breaking-news",
                "Editors' Pick",
                "editors-pick"
            ],
            "creator": [
                "Robert Hart",
                " Forbes Staff"
            ],
            "video_url": null,
            "description": "Tesla already accepts, and holds a $1.5 billion investment in, bitcoin, one of the first major organizations to do so.",
            "content": "Tesla already accepts, and holds a $1.5 billion investment in, bitcoin, one of the first major organizations to do so.",
            "pubDate": "2021-05-11 10:11:33",
            "image_url": "https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https://specials-images.forbesimg.com/imageserve/609a54e19908c7d0392ea502/0x0.jpg?cropX1=0&cropX2=1755&cropY1=58&cropY2=1045",
            "source_id": "forbes"
        },
        {
            "title": "Who are DarkSide Hacker Group?",
            "link": "https://www.thesun.co.uk/tech/14918162/who-are-darkside-hacker-group/",
            "keywords": [
                "Tech",
                "Cyber Crime and hacking"
            ],
            "creator": [
                "Harry Pettit"
            ],
            "video_url": null,
            "description": "A HACKER group hit the operator of a major fuel pipeline last week in one of the biggest cyberattacks in US history. The mysterious team behind the scheme, DarkSide, say they’re only in it for the cash – but who are they, and how did they breach Colonial Pipeline? Who are DarkSide Hacker Group? DarkSide […]",
            "content": "A HACKER group hit the operator of a major fuel pipeline last week in one of the biggest cyberattacks in US history. The mysterious team behind the scheme, DarkSide, say they’re only in it for the cash – but who are they, and how did they breach Colonial Pipeline? Who are DarkSide Hacker Group? GettyA hacker group breached a major US fuel pipeline last week[/caption] DarkSide is a ransomware group linked to an extortion attempt that has snared fuel deliveries across the US East Coast. The criminal gang may be new, but that doesn’t mean its hackers are amateurs, according to Reuters. Cybersecurity experts who have tracked DarkSide said it appears to be composed of veteran cybercriminals who are focused on squeezing out as much money as they can from their targets. “They’re very new but they’re very organized,” Lior Div, the chief executive of Boston-based security firm Cybereason, said on Sunday. AlamyThe attack on the Colonial Pipeline, which carries nearly half the fuel consumed along the US East Coast, is one of the most disruptive digital ransom schemes ever reported[/caption] “It looks like someone who’s been there, done that.” DarkSide is one of a number of increasingly professionalized groups of digital extortionists. The group has a mailing list, a press centre, a victim hotline and even a supposed code of conduct intended to spin the group as reliable, if ruthless, business partners. Experts like Div said DarkSide was likely composed of ransomware veterans and that it came out of nowhere in the middle of last year and immediately unleashed a digital crimewave. “It’s as if someone turned on the switch,” said Div, who noted that more than 10 of his company’s customers have fought off break-in attempts from the group in the past few months. Ransom software works by encrypting victims’ data; typically hackers will offer the victim a key in return for cryptocurrency payments that can run into the hundreds of thousands or even millions of dollars. If the victim resists, hackers are increasingly threatening to leak confidential data in a bid to pile on the pressure. DarkSide’s site on the dark web hints at their hackers’ past crimes, claims they previously made millions from extortion and that just because their software was new “that does not mean that we have no experience and we came from nowhere.” The site also features a Hall of Shame-style gallery of leaked data from victims who haven’t paid up, advertising stolen documents from more than 80 companies across the United States and Europe. Reuters was not immediately able to verify the group’s various claims. One of the more recent victims featured on its list was Georgia-based rugmaker Dixie which publicly disclosed a digital shakedown attempt affecting “portions of its information technology systems” last month. A Dixie executive did not immediately return a message seeking further comment. In some ways DarkSide is hard to distinguish from the increasingly crowded field of internet extortionists. Like many others it seems to spare Russian, Kazakh and Ukrainian-speaking companies, suggesting a link to the former Soviet republics. It also has a public relations program, as others do, inviting journalists to check out its haul of leaked data and claiming to make anonymous donations to charity. Even its tech savvy is nothing special, according to Georgia Tech computer science student Chuong Dong, who published an analysis of its programming. FoxThe cyberattack has been branded an ‘act of war’ by former House Speaker Newt Gingrich[/caption] According to Dong, DarkSide’s code was “pretty standard ransomware.” Div said that what does set them apart is the intelligence work they carry out against their targets beforehand. Typically “they know who is the manager, they know who they’re speaking with, they know where the money is, they know who is the decision maker,” said Div. In that respect, Div said that the targeting of Colonial Pipeline, with its potentially massive knock-on consequences for Americans up and down the Eastern seaboard – may have been a miscalculation. “It’s not good for business for them when the US government becomes involved, when the FBI becomes involved,” he said. “It’s the last thing they need.” As for DarkSide, which usually isn’t shy about putting out press releases and promises registered journalists “fast replies within 24 hours,” the group has stayed uncharacteristically silent. The reason is not clear. Requests for comment Reuters left via its main site and their media centre have gone unanswered. What is the Colonial Pipeline attack? The biggest US gas pipeline will not resume full operations for several more days due to a ransomware cyberattack blamed on a shadowy criminal network called DarkSide. The attack on the Colonial Pipeline, which carries nearly half the fuel consumed along the US East Coast, is one of the most disruptive digital ransom schemes ever reported. While the impact remains to be quantified, the pipeline shutdown will reduce fuel availability in the near term, push up prices and force refiners to cut production because they have no way to ship the gas. The privately owned company said on Monday it was working on restarting in phases with “the goal of substantially restoring operational service by the end of the week.” The FBI attributed the cyberattack to DarkSide, a group believed to be based in Russia or Eastern Europe. Its ransomware targets computers that do not use keyboards in the languages of former Soviet republics, cyber experts said. President Joe Biden said there was no evidence thus far that Russia’s government was involved. A statement issued in the group’s name on Monday said: “Our goal is to make money, and not creating problems for society.” Most read in Tech TO THE MOON Shiba Inu coin now rivals Dogecoin as price soars & Ethereum rockets beyond $4k DOUBLE STANDARDS China blames US for 'hyping fears' as section of rocket plunges to Earth BASS BOOST Save £51 on Panasonic’s SoundSlayer Gaming Speaker on Amazon DRIVE DEAL WD SSD drive is £97 OFF and works with Xbox, Playstation and PC DEAD SCARY Ancient Roman 'Gate to Hell' cave that 'kills INSTANTLY' still exists today VANISHING ACT Netflix movies and TV shows being removed this month – here's what's leaving Its statement did not mention Colonial Pipeline by name. Ransomware is a type of malware designed to lock computers by encrypting data. The hackers demand payment to let the owner regain access. It is unknown how much money the hackers are seeking, and Colonial has not commented on whether it would pay. Anne Neuberger, deputy national security adviser for cybersecurity, told reporters that the Biden administration is not offering advice on whether Colonial should pay the ransom. Colonial on Friday shut its 5,500-mile (8,850-km) pipeline network, which moves fuels including gasoline, diesel and jet fuel, to protect its systems. The episode laid bare the vulnerabilities of energy infrastructure to hackers. US lawmakers responded with calls for stronger protections for critical energy infrastructure. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
            "pubDate": "2021-05-11 09:43:22",
            "image_url": null,
            "source_id": "thesun"
        },
    ];
    res.send({ status: 'success', data: news, })
})

app.get('/research', (req, res) => {
    res.send({ status: 'success', data: [], })
})

app.post('/forms', (req, res) => {
    const body = req.body;
    console.log(body)
})

app.listen('3000', () => console.log('Sever is running on port 3000'))

module.exports = app