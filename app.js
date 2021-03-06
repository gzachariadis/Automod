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
        username: 'tirkouaz_kota',
        password: 'oauth:1312312'
    },
	channels: ['tirkouaz_kota']
});

client.connect();

var nigga_se_protasi = new RegExp('(n|v|ν)+([.#($@!* %]*){0,}(i|η|υ|ύ|ή|ι|ί!|@)+([.#($@!* %]*){0,}(g|γ)+([.#($@!* %]*){0,}(g|γ)+([.#($@!* %]*){0,}(α|ά|a|@|1|α)+[ ]*','gmi');
var nigker_nigka = new RegExp('(n|ν|v)+([#@!$%^&*1_]*)(i|1|ι|ί|!|@)+([#@!$%^&*1_]*)(γ|g)+([#@!$%^&*1_]*)(g|γ|κ|k)+[ ]{0,}(?=.)ε?έ?ε?ρ?e?r?P?ρ?R?A?a?ά?α?Α?','gmi');
var negro_negroi_simple = new RegExp('(n|ν)+(?:[\s]*)(3|e|έ|ε|1)+(?:[\s]*)(g|γ)+([b-df-hj-np-tv-z\s1_ ]*)(r|p|ρ)+([ b-df-hj-np-tv-z\s1_]*)(0|o|ό|ο|w|ω|ώ)+[ 1_iίι]*\s*','gmi');
var nigker_basic_with_spaces = new RegExp('(n|ν)+(?:[\s]*)(l|4|h|η|ή|i|1|ι|ί|!|@)+(?:[\s]*)(g|γ|b|β)+(?:[\s]*)[kκ]*(?:[\s]*)(3|e|ε|έ)+(?:[\s]*)(r|ρ)+\s*','gmi');

var gtxs = new RegExp('(g|γ)+([ #@!$%^&*(){}_+-.,~]*)(t|τ)+([ #@!$%^&*(){}_+-.,~]*)(x|χ)+([ #@!$%^&*(){}_+-.,~]*)(s|σ|ς)+([ #@!$%^&*(){}_+-.,~]*)','gmi');

var pun1sher_xontre = new RegExp('^(?:@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v)\W+(?:\w+\W+){0}?(x|χ)+([ ]*)(ο|ό|ω|ώ|w|0|o)+([ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)|(x|χ)+(ο|ό|ω|ώ|w|0|o)+([ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)\W+(?:\w+\W+){0}?@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v))([ ]*)$','gmi');
var pun1sher_hontre = new RegExp('^(?:@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v)\W+(?:\w+\W+){0}?(h)+([ ]*)(ο|ό|ω|ώ|w|0|o)+([ ]*)([t|τ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)|(h)+(ο|ό|ω|ώ|w|0|o)+([ ]*)([t|τ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)\W+(?:\w+\W+){0}?@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v))([ ]*)$','gmi');
var pun1sher_ntrouli = new RegExp('^(?:@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v)\W+(?:\w+\W+){0}?(n|ν)+([ ]*)(t|τ)+([ ]*)(r|ρ)+([ ]*)(ο|ό|ω|ώ|w|0|o)+([ ]*)(y|υ|ύ|u)+([ ]*)(l|λ)+([ ]*)(i|h|ή|η|ι|ί|1|υ|ύ|y|u)+([ ]*)|(n|ν)+([ ]*)(t|τ)+([ ]*)(r|ρ)+([ ]*)(ο|ό|ω|ώ|w|0|o)+([ ]*)(y|υ|ύ|u)+([ ]*)(l|λ)+([ ]*)(i|h|ή|η|ι|ί|1|υ|ύ|y|u)+([ ]*)\W+(?:\w+\W+){0}?@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v))([ ]*)$','gmi');
var pun1sher_hotdre = new RegExp('^(?:@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v)\W+(?:\w+\W+){0}?(h)+(ο|ό|ω|ώ|w|0|o)+([ ]*)(t|τ)+([ ]*)(d|δ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)|(h)+(ο|ό|ω|ώ|w|0|o)+([ ]*)(t|τ)+([ ]*)(d|δ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)\W+(?:\w+\W+){0}?@(p)(u|y)(n)(1)(s)(h)(e)(r)(s)_(t)(v))([ ]*)$','gmi');

var hotdre_sketo = new RegExp('^(h)+(ο|ό|ω|ώ|w|0|o)+([ ]*)([t|τ ]*)([ ]*)(t|τ)+([ ]*)(d|δ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)$','gmi');
var xontre_sketo = new RegExp('^([ ]*)(x|χ)+(ο|ό|ω|ώ|w|0|o)+([ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)$','gmi');
var hontre_sketo = new RegExp('^([ ]*)(h)+(ο|ό|ω|ώ|w|0|o)+([ ]*)([t|τ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(ρ|r)+([ ]*)(ε|έ|3|e)+([ ]*)$','gmi');
var ntrouli_sketo = new RegExp('^([ ]*)(n|ν)+([ ]*)(t|τ)+([ ]*)(r|ρ)+([ ]*)(ο|ό|ω|ώ|w|0|o)+([ ]*)(y|υ|ύ|u)+([ ]*)(l|λ)+([ ]*)(i|h|ή|η|ι|ί|1|υ|ύ|y|u)+([ ]*)$','gmi');

var pun1sher_paragogaxontrou_meioneipe = new RegExp('^(?!(?:.*(?:(e|ε|έ)+([ ]*)(ί|ι|i|1)+([ ]*)(π|p|P)+([ ]*)(΄ε|ε΄|έ|ε|3|e)+([ ]*).*|(λ|l)+([ ]*)(e|ε|έ|΄ε|ε΄|3)+([ ]*)(3|έ|e|ε|΄ε|ε΄)+([ ]*)(ι΄|΄ι|1|ί|ι|i)+([ ]*).*)))(?:.*(?:((π|p)+([\s]*)(y|u|υ|ύ|ι|ί|1|i)+([\s]*)(v|ν|n)+([\s]*)(i|ί|ι|i|1)+([\s]*)(?!s.*)|(p|π)+([\s]*)(ά|α|a|ύ|υ|y|u|i|ί|ι|1)+([\s]*)(ν|n|v)+([\s]*)(ύ|υ|y|u|i|ί|ι|1)+([\s]*)(s|ς|σ)+([\s]*)(h|ε|έ|e)+([\s]*)(ρ|r|p|P)+([\s]*))))(?:.*(?:((x|χ)+([\s]*)(ο|ό|o|w|ώ|ω)+([\s]*)(ν|n|v)+([\s]*)(t|τ)+([\s]*)(ρ|r|p)+([\s]*)(έ|ε|e|3|o|ό|ο|w|ώ|ω)+([\s]*)[ς|σ|s ]{0,}).*))$','gmi');

// Nigka 
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim()

	if (nigga_se_protasi.test(message) || nigker_nigka.test(message) || negro_negroi_simple.test(message) || nigker_basic_with_spaces.test(message)) {
		console.log(`nigga katigoria was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});

// GTXS
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(gtxs.test(message)) {
		console.log(`gtxs was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

 client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(pun1sher_xontre.test(message)) {
		console.log(`pun1sher_xontre was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

 client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(pun1sher_hontre.test(message)) {
		console.log(`pun1sher_hotre was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

 client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(pun1sher_ntrouli.test(message)) {
		console.log(`pun1sher_ntrouli was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

 client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(pun1sher_hotdre.test(message)) {
		console.log(`pun1sher_hotdre was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

 client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(hotdre_sketo.test(message)) {
		console.log(`hotdre_sketo was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

 client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(xontre_sketo.test(message)) {
		console.log(`xontre_sketo was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

 client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(hontre_sketo.test(message) || ntrouli_sketo.test(message)) {
		console.log(`hotre_sketo or ntrouli_sketo was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
 });

 client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if( pun1sher_paragogaxontrou_meioneipe.test(message)) {
		console.log(`pun1sher_paragogaxontrou_meioneipeorleei was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}s
 });