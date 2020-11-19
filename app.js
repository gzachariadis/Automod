// Server Code's Start
const tmi = require('tmi.js');
var regexes = require('./regexes');

const client = new tmi.Client({
    options: { debug: false },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: '',
        password: 'oauth:'
    },
	channels: ['']
});

client.connect();

// Nword - Ελληνικα - Αγγλικα
var nigga_se_protasi = new RegExp('(n|v|ν)+([.#($@!* %]*){0,}(i|η|υ|ύ|ή|ι|ί!|@)+([.#($@!* %]*){0,}(g|γ)+([.#($@!* %]*){0,}(g|γ)+([.#($@!* %]*){0,}(α|ά|a|@|1|α)+[ ]*','gmi');
var nigker_nigka = new RegExp('(n|ν|v)+([b-df-hj-np-tv-z\s1_]*)(i|1|ι|ί|!|@)+([b-df-hj-np-tv-z\s1_νκnk]*)(γ|g)+([b-df-hj-np-tv-z\s1_]*)(g|γ|κ|k)+[\s]{0,}(?=.)ε?έ?ε?ρ?e?r?P?ρ?R?A?a?ά?α?Α?\s*','gmi');
var nigger_me_kena_excel = new RegExp('\b(?!((ZULUL|TriPeek|TriHard|cmonBruh|KevinTurtle) ?){5})(n|ZULUL|TriPeek|TriHard|cmonBruh|KevinTurtle) ?(i|TriHard|ZULUL|TriPeek|cmonBruh|KevinTurtle) ?(g|TriHard|ZULUL|TriPeek|cmonBruh|KevinTurtle) ?(g|TriHard|ZULUL|TriPeek|cmonBruh|KevinTurtle) ?(e|TriHard|ZULUL|TriPeek|cmonBruh|KevinTurtle) ?(r|TriHard|ZULUL|TriPeek|cmonBruh|KevinTurtle)s?\b','gmi');
var negro_negroi_simple = new RegExp('(n|ν)+(?:[\s]*)(3|e|έ|ε|1)+(?:[\s]*)(g|γ)+([b-df-hj-np-tv-z\s1_ ]*)(r|p|ρ)+([ b-df-hj-np-tv-z\s1_]*)(0|o|ό|ο|w|ω|ώ)+[ 1_iίι]*\s*','gmi');
var nigker_basic_with_spaces = new RegExp('(n|ν)+(?:[\s]*)(l|4|h|η|ή|i|1|ι|ί|!|@)+(?:[\s]*)(g|γ|b|β)+(?:[\s]*)[kκ]*(?:[\s]*)(3|e|ε|έ)+(?:[\s]*)(r|ρ)+\s*','gmi');

var gtxs = new RegExp('(g|γ)+([ #@!$%^&*(){}_+-.,~]*)(t|τ)+([ #@!$%^&*(){}_+-.,~]*)(x|χ)+([ #@!$%^&*(){}_+-.,~]*)(s|σ|ς)+([ #@!$%^&*(){}_+-.,~]*)','gmi');
var pun1sher_xontre = new RegExp('^@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v)([ ]*)(x|χ)+([ ]*)(ο|ό|ω|ώ|w|0|o)+([ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)$|^(x|χ)+([ ]*)(ο|ό|ω|ώ|w|0|o)+([ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v)([ ]*)$','gmi');

var pun1sher_paragogaxontrou_meioneipe = new RegExp('^(?!(?:.*(?:(e|ε|έ)+(ί|ι|i|1)(π|p|P)+(έ|ε|3|e)).*))(?:.*(?:((π|p)+([\s]*)(y|u|υ|ύ|ι|ί|1|i)+([\s]*)(v|ν|n)+([\s]*)(i|ί|ι|i|1)+([\s]*)(?!s.*)|(p|π)+([\s]*)(ά|α|a|ύ|υ|y|u|i|ί|ι|1)+([\s]*)(ν|n|v)+([\s]*)(ύ|υ|y|u|i|ί|ι|1)+([\s]*)(s|ς|σ)+([\s]*)(h|ε|έ|e)+([\s]*)(ρ|r|p|P)+([\s]*))))(?:.*(?:((x|χ)+([\s]*)(ο|ό|o|w|ώ|ω)+([\s]*)(ν|n|v)+([\s]*)(t|τ)+([\s]*)(ρ|r|p)+([\s]*)(έ|ε|e|3|o|ό|ο|w|ώ|ω)+([\s]*)[ς|σ|s ]{0,}).*))$','gmi');


client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim()

	if (nigga_se_protasi.test(message)) {
		console.log(`nigga_se_protasi was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();
	
	if (nigker_nigka.test(message)) {
		console.log(`nigker_nigka was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});

// Arapis kai paragoga
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if (nigger_me_kena_excel.test(message)) {
		console.log(`negro_negroi_simple was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});


// Excel 
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(negro_negroi_simple.test(message)){
		console.log(`negro_negroi_simple was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});

// Nigga kai paragoga
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(nigker_basic_with_spaces.test(message)) {
		console.log(`negro_negroi_simple was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

