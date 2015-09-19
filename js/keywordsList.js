angular.module('keywordsList', [])
    .controller('KeywordsListController', function($scope) {
        var paper1 = new Raphael(document.getElementById('canvas_container'), 700, 1000);
        var paper2 = new Raphael(document.getElementById('canvas_container2'), 700, 1000);
        var sunKeywords = ['fire', 'father', 'soul', 'government', 'organisations',
            'will\npower', 'male', 'personality', 'political\npower', 'organiza-\ntional\nability',
            'purpose', 'body', "one's\nidentity", 'authorities', 'leadership',
            'aspirations', 'appearance', 'creative\nself-\nexpression', 'charisma', 'self-\nconfidence',
            'career\nstatus', 'overall\nhealth', 'conscious\nmind', 'occupation', 'intelligence', 'vitality'
        ];
        var moonKeyWords = ['Feelings', 'mother', 'Mind\n(not intellect)\nthoughts', 'public', 'home',
            'sensitivity', 'female', 'conditioned\nmind', 'the ability\nto sense\nmass trends', 'family\nheritage',
            'receptivity', 'feminity', 'peace\nof\nmind', 'popularity', 'domestic\nlife',
            'general\nhappiness', 'sub-\nconscious',
            'psychology', 'the past', 'memory', 'sleep',
            'imagination', 'fluids', 'ocean', 'support', 'food\npreparation\n& consum-\nption',
            'nourishment', 'vulnerability', 'dependence',
            'comforts', 'fertility', 'birthing\nprocess', 'early\nchildhood',
            'children', 'general\nhappiness\n& peace\nof mind', 'parenting', 'sweet\nspeech',
            'perceptions', 'mental\nattitude'
        ];
        var marsKeywords = ['strength\nand\npower', 'physical\nactivity', 'energy',
            'ego-centric\ndesire', 'passion', 'lust', 'will', 'initiative', 'impulsivity',
            'stamina', 'fighting\nsprit', 'competition', 'the warrior', 'military', 'martial arts',
            'weapons', 'enemies', 'conflicts', 'controversies', 'tools', 'sharp objects',
            'machines', 'fire', 'practicality', 'fixing things', 'property/\nbuildings',
            'accidents', 'litigations', 'sports'
        ];
        var mercuryKeyWords = ['Intellect', 'speech', 'communication', 'articulation', 'writing',
            'publishing', 'wit\n&humor', 'logic', 'reasoning', 'specific\ndetails', 'sociability',
            'networking', 'education', 'learning', 'teaching', 'languages', 'grammar', 'mathematics',
            'astrology', 'commerce\n&\ntrade', 'quick\nmovement', 'short\ndistance\ntravels'
        ];
        var jupiterKeyWords = ['Wealth', 'fortune', 'expansion', 'growth', 'wisdom', 'intelligence',
            'knowledge', 'ideals', "one's\nphilosophy\n and/or\n religion", 'dharma', 'reputation',
            'higher education', 'gurus\n&\nteachers', 'religious\nrites', 'traditions', 'classical\nlearning',
            'law', 'ethics', 'morality', 'solutions', 'ministry', 'faith', 'opportunities', 'diplomacy',
            'long\ndistance', 'travel'
        ];
        var venusKeyWords = ['senses\n&\nsensual\ndesires', 'pleasure', 'enjoyment', 'luxuries',
            'comforts', 'romance', 'spouse', 'marriage', 'martial happiness', 'happines\nin\ngeneral',
            'sensuality', 'sexuality', 'lust', 'social\nconnection', 'charm', 'beauty', 'nature',
            'pets\nand\nanimals', 'creativity', 'fine arts', 'culture', 'prosperity', 'vehicles',
            'refined\ntastes', 'festivities', 'adornments'
        ];
        var saturnKeyWords = ['sorrows\nand\nmisfortunes', 'losses', 'grief', 'separation',
            'dejection', 'ugliness', 'death', 'old age', 'poverty', 'longevity', 'detachment',
            'renunciation', 'solitude', 'isolation', 'structures', 'foundations', 'limitation',
            'contraction', 'restriction', 'pressure', 'discomforts', 'focus', 'concentration',
            'delays', 'obstacles', 'responsibility', 'humility', 'perseverance', 'patience',
            'doubt', 'fear', 'anxiety', 'shame', 'guilt', 'fatigue', 'exhaustion', 'chronic\ndiseases',
            'debility', 'difficult\nlessons', 'ability to\nmanifest\nthrough\nhard work'
        ];
        var rahuKeyWords = ['Extroversion', 'unorthodoxy', 'non-conformists', 'rebellion',
            'new technology', 'magic', 'mass\ncommunication', 'mass trends', 'delusion', 'inconsistency',
            'changeability', 'ups\nand\ndowns', 'compulsive\ndesires', 'instinctual\ndrives',
            'deviant\nbehavior', 'corruption', 'foreigners\nand\nforeign places', 'traveling',
            'materialistic\npower', 'difficult to\ndiagnose\ndiseases', 'snakes'
        ];
        var ketuKeywords = ['Introversion', 'occult\nknowledge', 'mystical\nexperience',
            'liberation', 'silence', 'isolation', 'withdrawal', 'monasticism', 'renunciation',
            'simplicity', 'detachment', 'self\nnegation', 'austerities', 'psychic\nsensitivity',
            'deep\nperception', 'intuition', 'psychological\nimbalance', 'illusion', 'deception',
            'manipulation', 'doubt', 'lack\nof\nmotivation', 'disillusionment'
        ];

        var houseOneKeyWords = ['self', 'main\npersonality\ntraits', 'identity', 'individuality', 'ego',
            'persona', 'mannerisms', 'overall\nhealth\nin\ngeneral', 'body',
            'physical\nconstitution', 'appearance', 'vitality', 'longevity',
            'beginning\nof\nlife', 'early\nchildhood', "one's\nfoundation",
            'orientation\nof\nlife', 'purpose', 'vision', 'aspirations',
            'intellect', 'happiness\nin\ngeneral', 'livelihood', 'profession',
            'fame', 'recognition', 'self-\nconfidence', 'dignity', 'honor'
        ];
        var houseTwoKeyWords = ['Money', 'income', 'wealth', 'acquisitions', 'resources', 'assets',
            'speech', 'truthfulness\nand\nfalsehood', 'food', 'clothes', 'luxuries', 'comforts',
            'jewelry', 'childhood\nfamily', 'eyesight', 'oral education', 'memory', 'manners',
            'politeness', 'modesty'
        ];
        var houseThreeKeyWords = ['Communication', 'media', 'writing', 'hobbies', 'arms', 'hands',
            'sports', 'fine arts', 'music', 'drama', 'siblings', 'allies', 'will', 'determination',
            'efforts', 'stamina', 'desires', 'short term\ngoals', 'short distance\ntravel'
        ];
        var houseFourKeyWords = ['Domestic life', 'home', 'land', 'property', 'fixed\nassests',
            'mother', 'family', 'ancestry', 'relatives', 'near\nand\ndear\nones', 'mind', 'emotions',
            'psychology', 'private\nlife', 'privacy', 'happiness', 'high school\neducation', 'vehicles'
        ];
        var houseFiveKeyWords = ['Children', 'creativity', 'self-expression', 'fine arts', 'poetry',
            'music', 'drama', 'writing', 'inteligence', 'intellect', 'deep\ninterests', 'inspiration',
            'talents', "one's\npassion", 'expression\nof\nemotions', 'skills', 'past life\nmerit',
            'vocational\neducation', 'students', 'disciples', 'wisdom', 'giving\ncounsel',
            'discrimination', 'virtue', 'morals', 'spiritual\npractice', 'mantras', 'devotion',
            'worship', 'ista\ndevatha', 'romance', 'love\naffairs', 'investments', 'speculations',
            'gambling', 'risk\ntaking', 'sports', 'recreation', 'games', 'entertainment'
        ];
        var houseSixKeyWords = ['Enemies', 'competition', 'opposition', 'battles', 'debts', 'loss',
            'theft', 'humiliation', 'imprisonment', 'conflicts', 'disputes', 'obstacles', 'worries',
            'litigation', 'accidents', 'acute disease', 'illness', 'healing', 'health\nregiments',
            'routines', 'habits', 'exercise', 'service', 'employment', 'daily\nwork', 'making\nimprovements'
        ];
        var houseSevenKeyWords = ['Marriage', 'martial\nhappiness', 'relationships',
            'courtship', 'significant\nothers', 'partnerships', 'business\npartnerships',
            'business\nin\ngeneral', 'social\nconnections', 'sexual\nunion', 'sexual\ndesire',
            'adultery', 'residence\nin\nforeign\ncountries', 'foreign places', 'journeys', 'death'
        ];
        var houseEightKeyWords = ['Longevity', 'life\nforce', 'death', 'chronic\nillness', 'spouse\nmoney',
            'inheritance', 'loans', 'legacies', 'grants', 'sudden\ngains', 'sudden\nmisfortunes',
            'defeat', 'intrigues', 'scandals', 'obstacles', 'upheavals', 'misery', 'sudden\nchange',
            'breaks', 'separation', 'secrets', 'hidden\nknowledge', 'research', 'occult\nsciences',
            'metaphyscis', 'transformation', 'deviant\nbehavior', 'unorthodox', 'unconventional',
            'alternative'
        ];
        var houseNineKeyWords = ['Father', 'teachers', 'guru', 'devotion', 'religion', 'temples',
            'spiritual\npath', 'knowledge', 'wisdom', 'philosophy', 'ideals', 'inspirations', 'law',
            'dharma', 'ethics', 'morals', 'faith', 'righteousness', 'dignity', 'leadership',
            'virtuous\ndeeds', 'charities', 'kindness', 'higher\nnstitutions', 'long\ndistance\ntravel',
            'fortune', 'prosperity'
        ];
        var houseTenKeyWords = ['Profession', 'career', 'work', 'business', 'actions', 'achivements',
            'fame', 'public', "reputation", 'status', 'position', 'responsibilities', 'authorities',
            'government', 'public\ninstitutions', 'leadership', 'political\npower'
        ];
        var houseElevenKeyWords = ['Financial gains', 'income\nfrom\ncareer', 'easy\nmoney',
            'side\nincome', 'profits', 'status', 'recognition', 'honors', 'rewards', 'promotion',
            'fulfillment\nof\ndesires', 'long term\ngoals', 'organisations', 'groups',
            'institutions', 'friends', 'society\nat\nlarge', 'elder siblings', 'illness'
        ];
        var houseTwelveKeyWords = ['Losses\nof\nall kinds', 'expenses', 'debts', 'expenditures',
            'litigation', 'downfalls', 'confiscation', 'illness', 'convalescence', 'hospitalization',
            'isolation', 'confinement', 'imprisonment', 'living\nin\nforeign\ncountry', 'mystical\nknowledge',
            'renunciation', 'moksha', 'liberation', 'endings', 'misery', 'sorrow', 'anguish',
            'decline', 'waste', 'obstacles', 'impediments', 'giving\nto\ncharity', 'illegal deeds'
        ];

        var planetOne = {
            name: "Sun",
            keywords: sunKeywords
        };
        var planetTwo = {
            name: "Moon",
            keywords: moonKeyWords
        };
        var planetThree = {
            name: "Mars",
            keywords: marsKeywords
        };
        var planetFour = {
            name: "Mercury",
            keywords: mercuryKeyWords
        };
        var planetFive = {
            name: "Jupiter",
            keywords: jupiterKeyWords
        };
        var planetSix = {
            name: "Venus",
            keywords: venusKeyWords
        };
        var planetSeven = {
            name: "Saturn",
            keywords: saturnKeyWords
        };
        var planetEight = {
            name: "Rahu",
            keywords: rahuKeyWords
        };
        var planetNine = {
            name: "Ketu",
            keywords: ketuKeywords
        };

        var houseOne = {
            value: 1,
            keywords: houseOneKeyWords
        };
        var houseTwo = {
            value: 2,
            keywords: houseTwoKeyWords
        };
        var houseThree = {
            value: 3,
            keywords: houseThreeKeyWords
        };
        var houseFour = {
            value: 4,
            keywords: houseFourKeyWords
        };
        var houseFive = {
            value: 5,
            keywords: houseFiveKeyWords
        };
        var houseSix = {
            value: 6,
            keywords: houseSixKeyWords
        };
        var houseSeven = {
            value: 7,
            keywords: houseSevenKeyWords
        };
        var houseEight = {
            value: 8,
            keywords: houseEightKeyWords
        };
        var houseNine = {
            value: 9,
            keywords: houseNineKeyWords
        };
        var houseTen = {
            value: 10,
            keywords: houseTenKeyWords
        };
        var houseEleven = {
            value: 11,
            keywords: houseElevenKeyWords
        };
        var houseTwelve = {
            value: 12,
            keywords: houseTwelveKeyWords
        };

        $scope.planets = [planetOne, planetTwo, planetThree,
            planetFour, planetFive, planetSix,
            planetSeven, planetEight, planetNine
        ];

        $scope.houses = [houseOne, houseTwo, houseThree, houseFour,
            houseFive, houseSix, houseSeven, houseEight,
            houseNine, houseTen, houseEleven, houseTwelve
        ];

        $scope.currentPlanet = planetOne;
        $scope.currentHouse = houseOne;

        $scope.createKeywordObject = function(paper, x, y, text) {
            paper.circle(x, y, 60).attr({
                fill: "#FF7420",
                "stroke-width": 0
            });
            paper.text(x, y, text).attr({
                'font-size': 20
            });
        };
        $scope.getPaginationLimit = function(limit) {
            return new Array(limit);
        };
        $scope.populatePlanetKeywords = function(planet, keywordsOffset) {
            $scope.currentPlanet = planet;
            paper1.clear();
            var keywords = planet.keywords;
            if (keywords.length > 15) {
                $scope.showPaginationOne = true;
                $scope.numberOfPlanetPages = Math.floor(keywords.length / 15) + 1;
            } else {
                $scope.showPaginationOne = false;
            }
            var x = -50;
            var y = 0;
            var i = 0;
            var length = keywords.length;

            if (keywordsOffset) {
                i = keywordsOffset;

            }
            if (keywords.length - i > 15) {
                length = i + 15;
            }
            for (i; i < length; i++) {
                if (i % 5 == 0) {
                    x = x + 150;
                    y = -50;
                }
                y = y + 150;
                $scope.createKeywordObject(paper1, x, y, keywords[i]);
            }
        };

        $scope.populateHouseKeywords = function(house, keywordsOffset) {
            $scope.currentHouse = house;
            paper2.clear();
            var keywords = house.keywords;
            if (keywords.length > 15) {
                $scope.showPaginationTwo = true;
                $scope.numberOfHousePages = Math.floor(keywords.length / 15) + 1;
            } else {
                $scope.showPaginationTwo = false;
            }
            var x = -50;
            var y = 0;
            var i = 0;
            var length = keywords.length;

            if (keywordsOffset) {
                i = keywordsOffset;

            }
            if (keywords.length - i > 15) {
                length = i + 15;
            }
            for (i; i < length; i++) {
                if (i % 5 == 0) {
                    x = x + 150;
                    y = -50;
                }
                y = y + 150;
                $scope.createKeywordObject(paper2, x, y, keywords[i]);
            }
        };

        $scope.populatePlanetKeywords($scope.currentPlanet);
        $scope.populateHouseKeywords($scope.currentHouse);

        $scope.previousPlanetPage = function() {
            $scope.showPlanetPage($scope.currentPlanetPage - 1);
        };

        $scope.nextPlanetPage = function() {
            $scope.showPlanetPage($scope.currentPlanetPage + 1);
        };

        $scope.previousHousePage = function() {
            $scope.showHousePage($scope.currentHousePage - 1);
        };

        $scope.nextHousePage = function() {
            $scope.showHousePage($scope.currentHousePage + 1);
        };

        $scope.showPlanetPage = function(pageNumber) {
            $scope.currentPlanetPage = pageNumber;
            var keywordOffset = 0;
            if (pageNumber === 2) {
                keywordOffset = 15;
            }
            if (pageNumber === 3) {
                keywordOffset = 30;
            }
            $scope.populatePlanetKeywords($scope.currentPlanet, keywordOffset);
        };
        $scope.showHousePage = function(pageNumber) {
            $scope.currentHousePage = pageNumber;
            var keywordOffset = 0;
            if (pageNumber === 2) {
                keywordOffset = 15;
            }
            if (pageNumber === 3) {
                keywordOffset = 30;
            }
            $scope.populateHouseKeywords($scope.currentHouse, keywordOffset);
        };


    });