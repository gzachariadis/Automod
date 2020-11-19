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

function reverseString(str) {
    return str.split("").reverse().join("");
}

var arapis_simple = new RegExp('\b(a|α|ά|@)+([_\s]*)?(r|ρ)+([_\s]*)?(a|α|ά|@)+(π|p)+(i|1|ι|ί|η|ή|υ|ύ|h|i|l|y|!|_|#|@){0,}[.]*([#!@*%)(}}?><|;?_]*)?(s|σ|ς|d|δ){0,}\s?\b','gmi');

var arapakias_complex = new RegExp('(4|ά|α|a|!|@)+([ _#!@(*).;,~+-]*)(r|ρ|P)+([ _#!@(*).;,~+-]*)(4|ά|α|a|!|@)+([ _#!@(*).;,~+-]*)(π|p)+([ _#!@(*).;,~+-]*)(4|ά|α|a|!|@)+([ _#!@(*).;,~+-]*)(k|κ)+([ _#!@(*).;,~+-]*)(4|h|η|ή|i|1|ι|ί|!|l)+([ _#!@(*).;,~+-]*)[4Aάαa!@]{0,}([ _#!@(*).;,~+-]*)([sςσΣS]){0,}\s*?','gmi');

var paragoga_toy_mauros = new RegExp('(?!\s|^)(m|μ)(?:[\s]*)+(?:[\s]*)(1|@|α|ά|a)+(?:[\s]*)(ύ|u|y|υ)+(?:[\s]*)(r|ρ)+(?:[\s]*)(o|ό|ο|w|ώ|ω|0)+(?:[\s]*)(ς|s|σ)(?=\s|$)','gmi');
var Noor_Noor1_NourOyan = new RegExp('\b(n|ν)+([\s]*)?(0|o|ο|ό|ώ|ω)+(ρ|r)+[\s1_]*[1_]*((0|o|ο|ό)+(y|u|υ|ύ)+(4|ά|α|a|1|!)+(ν|n)+){0,}\s{0,}\b','gmi');	
var Noor_basic = new RegExp('^(?!(?:.*(?:((F|Φ|f|φ)(έ|ε|e|3|E|Ε)(y|u|υ|Υ|Y|ύ)(έ|ε|e|3|E|Ε))).*))(?:(Ν|n|ν)+([_\s]*)?(w|ώ|ω|0|o|ο|ό|O|Ο|Ω|W)+([_\s]*)?(w|ώ|ω|0|o|ο|ό|O|Ο|Ω|W)+([#!@*%)(}}?><|;?_]*)?(r|ρ|P|R)+).*(?:(.*))$','gmi');
var NR_simple = new RegExp('\b(n|ν)+([@!_\s]*)?[.\s]*[rρP]+\b\s*','gmi');
var Noorikos = new RegExp('(n|ν)+([_\s.#!@*%)(}}?><|;?_]*)?(w|ώ|ω|0|o|ο|ό)+([_\s.#!@*%)(}}?><|;?_]*)?(w|ώ|ω|0|o|ο|ό)+([_\s#!@*%)(}}?><|;?_.]*)?(r|ρ|P)+([_\s#.!@*%)(}}?><|;?_]*)?(4|h|η|ή|i|1|ι|ί|l|!|υ|Υ|U)+([_\s#.!@*%)(}}?><|;?_]*)?(κ|k)+([_\s#!@*%)(}}?><.|;?_]*)?(w|ώ|ω|0|o|ο|ό)+([_\s#!.@*%)(}}?><|;?_]*)?(ς|s|σ)+\s*','gmi');
var knig_excel = new RegExp('([1\/](V|\\\/)|\b(n|kn))[i1]+[g]+s?\b','gmi');
var nigger_excel = new RegExp('(?!no1GAH\b|nekkers?\b|need a\b|no gas\b|nodder\b|nodders\b)(([1\/](V|\\\/)|\b(n|kn))[i1e0o|j]*(ck)?|\bVoteNay )( |-)?(([^01aefhilmnorstuvxyzäåö])\8|\s(\{emote})\s\9\s|[gq9ʒ]+)( |-)?(r|[ue]r|row|a[hr]?|r[oe]|nog)s?\b','gmi');
var wiggers_excel = new RegExp('\bn\S+ iggers?(?<!bigger|digger|diggers)\b','gmi');
var nigger_me_kena_excel = new RegExp('\b(?!((TriHard|cmonBruh|KevinTurtle) ?){5})(n|TriHard|cmonBruh|KevinTurtle) ?(i|TriHard|cmonBruh|KevinTurtle) ?(g|TriHard|cmonBruh|KevinTurtle) ?(g|TriHard|cmonBruh|KevinTurtle) ?(e|TriHard|cmonBruh|KevinTurtle) ?(r|TriHard|cmonBruh|KevinTurtle)s?\b','gmi');
var gasthejews = new RegExp('gas.*the.*jews?','gmi');	
var kan_ngger = new RegExp('([1\/](V|\\\/)|\b(n|kn))[i1]+[g]+s?\b','gmi');
var nigga_simple_greek = new RegExp('\b(n|v|ν)+([.#($@!* %]*){0,}(i|η|υ|ύ|ή|ι|ί!|@)+([.#($@!* %]*){0,}(g|γ)+([.#($@!* %]*){0,}(α|ά|a|@|1)+[ ]*\b|\b(ν|n|v)+(η|υ|ύ|ή|ι|ί!|@)+(?!νκ|κν|KN)([νκ.#($@!*%]*)(γ)+([κν.#($@!* %]*)(ά|α|Α)+\s*\b','gmi');
var nigga_complex = new RegExp('\b(n|ν|v)+([\s]*)?(l|h|η|ή|i|1|ι|ί|ε|έ|e)+([b-df-hj-np-tv-z\s1_]*)(g|γ)+([b-df-hj-np-tv-z\s1_]*)(a|4|1|a|A|ά)+[ ΛλLlεΕέEeιίiIΙ]{0,}\s','gmi');
var nigker_nigka = new RegExp('\b(n|ν|v)+([b-df-hj-np-tv-z\s1_]*)(i|1|ι|ί|!|@)+([b-df-hj-np-tv-z\s1_νκnk]*)(γ|g)+([b-df-hj-np-tv-z\s1_]*)(κ|k)+[\s]{0,}(?=.)ε?έ?ε?ρ?e?r?P?ρ?R?A?a?ά?α?Α?\s*\b','gmi');
var negrepontis = new RegExp('(n|v|ν)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(3|e|έ|ε|1)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(g|γ)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(r|p)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(3|e|έ|ε|1)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(p|π)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(o|ό|ο|ώ|ω|w)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(ν|n|v)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(t|τ)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(η|ι|ί|ή|υ|ύ|i|h|y|u)+([b-df-hj-np-tv-z\s1_+;@*#%()!±~]*)(ς|σ|s)+','gmi');
var negr_paragonta = new RegExp('\b\w*(n|v|ν)+([ 1_+;@*#%()!±~]*)(3|e|έ|ε|1)+([ 1_+;@*#%()!±~ ]*)(g|γ)+([ 1_+;@*#%()!±~ ]*)(r|p)+([ 1_+;@*#%()!±~]*)\w*\b','gmi');
var negrontes = new RegExp('(n|ν)+\s*([\s]*)?\s*(3|e|ε|έ|4)+\s*([\s]*)?\s*(γ|g)+\s*([\s]*)?\s*(r|ρ)+\s*([\s]*)?\s*(W|w|ώ|ω|o|ο|ό|0)+\s*([\s]*)?\s*(n|ν)+\s*([\s]*)?\s*(t|τ)+\s*([\s]*)?\s*(3|e|ε|έ|4)+\s*([\s]*)?\s*(σ|ς|s)+\s{0,}', 'gmi');
var montenegro = new RegExp('(m|μ)+\s*([\s]*)?\s*(w|ώ|ω|0|o|ο|ό)+\s*([\s]*)?\s*(n|ν)+\s*([\s]*)?\s*(τ|t)+\s*([\s]*)?\s*(3|e|ε|έ|4)+\s*([\s]*)?\s*(n|ν)+\s*([\s]*)?\s*(3|e|ε|έ|4)+\s*([\s]*)?\s*(γ|g)\s*([\s]*)?\s*(r|ρ)\s*([\s]*)?\s*(w|ώ|ω|0|o|ο|ό)+\s{0,}','gmi');

var negriki_simple = new RegExp('(n|v|ν)+([ b-df-hj-np-tv-z\s1_#]*)(3|e|έ|ε|1)+([ b-df-hj-np-tv-z\s1_#]*)(g|γ|b|β)+([b-df-hj-np-tv-z\s1_ #]*)(r|p)+([ b-df-hj-np-tv-z\s1_#]*)(h|η|ή|i|1|ι|ί|4)+([ b-df-hj-np-tv-z\s1_#]*)(k|κ)+([ b-df-hj-np-tv-z\s1_#]*)(h|η|ή|i|1|ι|ί|4)+([ b-df-hj-np-tv-z\s1_#]*)','gmi');
var negro_negroi_simple = new RegExp('(n|ν)+(?:[\s]*)(3|e|έ|ε|1)+(?:[\s]*)(g|γ)+([b-df-hj-np-tv-z\s1_ ]*)(r|p)+([ b-df-hj-np-tv-z\s1_]*)(0|o|ό|ο|w|ω|ώ)+[ 1_iίι]*\s*','gmi');
var nigker_basic_with_spaces = new RegExp('(n|ν)+(?:[\s]*)(l|4|h|η|ή|i|1|ι|ί|!|@)+(?:[\s]*)(g|γ|b|β)+(?:[\s]*)[kκ]*(?:[\s]*)(3|e|ε|έ)+(?:[\s]*)(r|ρ)+\s*','gmi');
var prezaki = new RegExp('(p|π)+\s*([\s]*)?\s*(ρ|r)+\s*([\s]*)?\s*(3|e|ε|έ|4)+\s*([\s]*)?\s*(z|ζ)+\s*([\s]*)?\s*(a|α|ά|@)+\s*([\s]*)?\s*(κ|k)+\s*([\s]*)?\s*(u|4|h|η|ή|i|1|ι|ί|l|!|@|y|υ)+\s{0,}','gmi');
var Faggot = new RegExp('(f|φ)+\s*([\s]*)?\s*(α|α|A|ά|@|!)+\s*([\s]*)?\s*(g|γ)+\s*([\s]*)?\s*(w|ώ|ω|0|o|ο|ό)+\s*([\s]*)?\s*(t|τ)+\s{0,}','gmi');
var ebraika_sapoynia = new RegExp('\w*(e|ε|έ)+([\s]*)(β|v|b)+([\s]*)(ρ|r|P)+([\s]*)(4|ά|α|a|!|@)+([\s]*)(4|h|η|ή|i|1|ι|ί|l|!)+([ ]*)(k|κ)+([\s]*)(4|ά|α|a|!|@)+([\s]*)(s|σ|ς)+([\s]*)(4|ά|α|a|!|@)+([\s]*)(π|p|P)+([\s]*)(ο|o|ό|w|ω|ώ)+([\s]*)(y|u|υ|ύ)+([\s]*)(ν|v|n)([\s]*)(4|h|η|ή|i|1|ι|ί|l|!)+([\s]*)(4|ά|α|a|!|@)+\w*','gmi');
var sklaboi = new RegExp('(s|σ|ς)+([ 1_+;@*#%()!±~]*)(κ|k)+([ 1_+;@*#%()!±~ ]*)(l|λ)+([ 1_+;@*#%()!±~ ]*)(4|ά|α|a|!|@)+([ 1_+;@*#%()!±~]*)(v|β|b)+([ 1_+;@*#%()!±~]*)(ι|i|ί|0|ο|ό|w|ώ|ω|o)+([ 1_+;@*#%()!±~]*)([yuύυYUΥsσςΣS]*)','gmi');
var nekkers = new RegExp('\bnekkers\b','gmi');
var needer = new RegExp('(n|ν|v)+(3|e|ε|έ4|h|η|ή|i|1|ι|ί|l|!|@)+(δ|d)+(3|e|ε|έ)+(r|R|ρ|Ρ)+', 'gmi');
var n1ggets = new RegExp('(n|ν|v)+([\s]*)(!|4|h|η|ή|i|1|ι|ί)+([\s]*)(γ|g)+([\s]*)(γ|g|k|κ)+([\s]*)(3|ε|e|έ)+([\s]*)(t|τ)+([\s]*)(σ|ς|s)+','gmi');
var pun1sher_paragogaxontrou_meioneipe = new RegExp('^(?!(?:.*(?:(e|ε|έ)+(ί|ι|i|1)(π|p|P)+(έ|ε|3|e)).*))(?:.*(?:((π|p)+([\s]*)(y|u|υ|ύ|ι|ί|1|i)+([\s]*)(v|ν|n)+([\s]*)(i|ί|ι|i|1)+([\s]*)(?!s.*)|(p|π)+([\s]*)(ά|α|a|ύ|υ|y|u|i|ί|ι|1)+([\s]*)(ν|n|v)+([\s]*)(ύ|υ|y|u|i|ί|ι|1)+([\s]*)(s|ς|σ)+([\s]*)(h|ε|έ|e)+([\s]*)(ρ|r|p|P)+([\s]*))))(?:.*(?:((x|χ)+([\s]*)(ο|ό|o|w|ώ|ω)+([\s]*)(ν|n|v)+([\s]*)(t|τ)+([\s]*)(ρ|r|p)+([\s]*)(έ|ε|e|3|o|ό|ο|w|ώ|ω)+([\s]*)[ς|σ|s ]{0,}).*))$','gmi');

var arapis_complex = new RegExp('^(?!(?:.*(?:((F|Φ|f|φ)+(EI|ei|ει|Ι|ι|I|i|ί|H|Η|η|ή|h|Y|y|U|Υ|u|ύ|υ)+(Σ|S|σ|ς|s)+(T|t|τ)+(EI|ei|ει|ι|Ι|I|i|ί|H|Η|η|ή|h|y|Υ|Y|u|ύ|υ)+(κ|k|K|Κ)+(EI|ei|ει|ι|Ι|I|i|ί|H|Η|η|ή|h|y|Υ|Y|u|ύ|υ)+|rapid)).*))(?:.*(?:((4|ά|α|a|!|@)+([ _#!@(*).;,~+-]*)?(r|ρ)+([ _#!@(*).;,~+-]*)(4|ά|α|a|!|@)+([_#!@(*).;,~+-]*)(π|p)+([ _#!@(*).;,~+-]*)([4HIhηήi1ιί!])([ _#!@(*).;,~+-]*)([sςσΣS ]){0,}\s*?).*))$','gmi');
var negros_simple = new RegExp('(?<![u|y])(n|v|ν)+([ \s1_]*)(3|e|έ|ε|1)+([ \s1_]*)(g|γ)+([\s1_ ]*)(r|p)+([ \s1_]*)(0|o|ό|ο|w|ω|ώ)+([ \s1_]*)([ς|σ|s]*)+\s*','gmi');
var enxromos_biastis = new RegExp('(?=.*(e|ε|έ|3|Ε|E)+([ #!@,.;]*)([ νnNΝγgGΓ]){1,}([ #!@,.;]*)(Χ|x|χ|X)+([ #!@,.;]*)(ρ|r|R|P)+([\s#!@,.;]*)(ώ|ω|ο|ό|o|Ο|0|O|Ω|W|w)+([ #!@.; ]*)(m|μ|M|Μ)+([\s#!@.;,]*)(ώ|ω|ο|ό|o|Ο|0|O|Ω|W|w)+([#!@.;, ]*)([sςσΣS ]){0,}.*)(?=.*(b|β)(1|ί|ι|i|I|Ι|ή|η|υ|ύ|ει|οι|εί|οί|h|y|u|ei|oi|4)(α|ά|a|@|Α|1)(σ|ς|s|S|Σ)(τ|t|T|Τ)(1|ί|ι|i|I|Ι|ή|η|υ|ύ|ει|οι|εί|οί|h|y|u|ei|oi|4)[sσςΣS ]{0,}).*$','gmi');
var kneek = new RegExp('.*(k|κ)+([\s]*)(n|ν)+([\s]*)(Ε|E|έ|ε|e|3)+([\s]*)(?:[\seέεΕE]*)(g|γ|k|κ)+([\s]*)([\sρRPr]*)(ο|o|ώ|0|o|w|ω|a|ά|α|ε|έ|Ε|E|e|k|κ)+([\sρRPr]*)([\s]*).*','gmi');
// var nickos_galis = new RegExp('^.*(n|ν)([ ]*)(1|ί|ι|i|I|Ι|ή|η|υ|ύ|ει|οι|εί|οί|h|y|u|ei|oi|4)([ ]*)(ck|c|k|K|κ|Κ|γ){1,}([ ]*)(γ|g)+(?:[ cCkKκΚγ]*)(?:[ άAΑaα@1εέeEE]){1,}|.*([k|κ]*)(n|ν)([ ]*)(1|ί|ι|i|I|Ι|ή|η|υ|ύ|ει|οι|εί|οί|h|y|u|ei|oi|4|έ|e|ε|3)([ ]*)(ck|c|k|K|κ|Κ){1,}(0|ώ|ω|w|ο|ό|o)(?:[ ςσSΣs]*)(g|γ)+([κkΚK ]*)(ά|A|Α|a|α|@|1|ε|έ|e|E|Ε)+([ ]*)(l|λ|ρ|r)+|(ck|c|k|K|κ|Κ)([ ]*)(n|ν)(1|ί|ι|i|I|Ι|ή|η|υ|ύ|ει|οι|εί|οί|h|y|u|ei|oi|4|e|έ|ε|3)+([ ]*)(γ|g)([ kKΚκ]*)(ά|α|a|@|Α|A)','gmi');
var an_eager = new RegExp('^(?=.*([aάAΑα@]*)(n|ν))(?=.*(ε|έ|e|3)(ά|α|a|@)(g|γ)(έ|ε|e|3)(r|ρ|p).*).+$','gmi');
var are_up_is = new RegExp('(4|ά|α|a|!|@)+([ ]*)(r|ρ)+([ ]*)(e|έ|ε|3)+([ ]*)(y|u|ύ|υ)+([ ]*)(p|π|P)+([ ]*)(i|ι|ί|1)+([ ]*)(s|σ|ς)+([ ]*)','gmi');
var figgaz = new RegExp('(?<![ρR])(i|η|υ|ύ|ή|ι|ί!|@)+(g|γ){2}(ά|a|α|@|1).*','gmi');
var niptir = new RegExp('(ν|n)([ .#!]*)(i|η|υ|ύ|ή|ι|ί!|@)+(p|π)+(τ|t)+(i|η|υ|ύ|ή|ι|ί!|@)+(r|ρ)+(?=[\s])','gmi');
var niptirsketo = new RegExp('^(ν|n)([ .#!]*)(i|η|υ|ύ|ή|ι|ί!|@)+(p|π)+(τ|t)+(i|η|υ|ύ|ή|ι|ί!|@)+(r|ρ)+(?:[ ]*)(?<![άαAAa])$','gmi');
var nigka_paragoga = new RegExp('(n|ν)+(1|ί|ι|i|I|Ι|υ|ύ|y|u|4)+(γ|g)+(?=[oόο0wWOΟώωRrρράαaAΑ@sσςsSΣuύυytTτΤeέεΕE]{1,})','gmi');
var egros = new RegExp('([ ]*)[mμζzZMΜΖβBbB]{1}([ ]*)(έ|e|ε|3)+([ ]*)(γ|g)+([ ]*)(ρ|r)+([ ]*)(ό|ο|o|ώ|ω|w)+([ ]*)(s|ς|σ)+([ ]*)','gmi');

// Random
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim()

	if (prezaki.test(message) || Faggot.test(message) || nigka_paragoga.test(message)|| egros.test(message)) {
		console.log(`random katigoria (no.1) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});

// Noor (Etoimo)
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();
	
	if ( Noorikos.test(message) || NR_simple.test(message)|| Noor_Noor1_NourOyan.test(message) || Noor_basic.test(message)) {
		console.log(`noor katigoria (no.2) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});

// Arapis kai paragoga
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if (arapis_simple.test(message) || are_up_is.test(message) || arapakias_complex.test(message) || arapis_complex.test(message)) {
		console.log(`arapis katigoria (no.3) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}

	if (paragoga_toy_mauros.test(message) ) {
		console.log(`mauros katigoria (no.4) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});


// Excel 
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if(knig_excel.test(message) || nigger_excel.test(message) || wiggers_excel.test(message) || nigger_me_kena_excel.test(message) || gasthejews.test(message) || kan_ngger.test(message)){
		console.log(`knig_excel katigoria (no.5) was trigged by ${tags.username} for message ${message.trim()}`);
		// client.say(channel, "/delete " + tags.id);
	}
});

// Nigga kai paragoga
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim();

	if (negr_paragonta.test(message) || negrepontis.test(message) || nigga_complex.test(message) || nigga_simple_greek.test(message)){
		console.log(`nigga-negro katigoria (no.6) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}

	if (nigker_nigka.test(message) || negrontes.test(message) || montenegro.test(message)){
		console.log(`nigga-negro katigoria (no.6)-v2 was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});

// Nigga kai paragoga pt.2
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim()

	if (negros_simple.test(message) || negriki_simple.test(message) || negro_negroi_simple.test(message) || nigker_basic_with_spaces.test(message)) {
		console.log(`nigga-negro v.2 katigoria (no.7) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});

// Sklaboi
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim()
	
	if (ebraika_sapoynia.test(message) || sklaboi.test(message)) {
		console.log(`sklaboi katigoria (no.8) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});


// Version 2

client.on('message', (channel, tags, message, self) => {
	if (self) return;

	message = message.replace(regexes.tagss, '').trim();

	if (kneek.test(message) || enxromos_biastis.test(message) || an_eager.test(message) || are_up_is.test(message) || figgaz.test(message) || niptir.test(message) || niptirsketo.test(message)) {
		console.log(`pun1sher-nekkes katigoria (no.9) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
	
});

// Nekkers
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	message = message.replace(regexes.tagss, '').trim()

	if (nekkers.test(message) || needer.test(message) || n1ggets.test(message) || pun1sher_paragogaxontrou_meioneipe.test(message)) {
		console.log(`pun1sher-nekkes katigoria (no.9) was trigged by ${tags.username} for message ${message.trim()}`);
		client.say(channel, "/delete " + tags.id);
	}
});


client.on('message', (channel, tags, message, self) => {
	if(self) return;
	
	// Remove tags from messages so they don't accidentally triger the bot.
	message = message.replace(regexes.tagss, '').trim()

	var replacements = new Map([
		[/^(?!(?:.*(?:(e|ε|έ)+(ί|ι|i|1)(π|p|P)+(έ|ε|3|e)).*))(?:.*(?:((t|τ)(s|σ|ς)(i|ι|ί)(l|λ)(i|ί|ι)+)))(?:.*(?:((σ|ς|s)+(κ|k)+(a|α|ά)+(τ|t)+(ό|o|w|ώ|0|ο)+(x|χ)+(ο|ό|o|w|ώ|ω)+(ν|n|v)+(t|τ)+(ρ|r|p)+(έ|ε|e|3)+).*))$/gmi,'skatoxontretsili'],
		[/^.*?\b(t|τ)+(s|σ|ς)+(4|h|η|ή|i|1|ι|ί|l|!)+(l|1|I|!)+(4|h|η|ή|i|1|ι|ί|l|!)+\b.*?\b(s|σ|ς)+(κ|k)+(4|ά|α|a|!|@)+(t|τ)+(o|ο|ό|0)(χ|x)+(o|ο|ό|0)+(n|ν)+(t|τ)(r|ρ)+(e|ε|έ|3)+\b.*?$|^.*?\b(s|σ|ς)+(κ|k)+(4|ά|α|a|!|@)+(t|τ)+(o|ο|ό|0)(χ|x)+(o|ο|ό|0)+(n|ν)+(t|τ)(r|ρ)+(e|ε|έ|3)\b.*?\b(t|τ)+(s|σ|ς)+(4|h|η|ή|i|1|ι|ί|l|!)+(l|1|I|!)+(4|h|η|ή|i|1|ι|ί|l|!)+\b.*?$/gmi,'skatoxontre_tsili'],
		]),
		m = message;
	
		var BreakException = {};

			try {
				replacements.forEach(function(value, key){
					if (m.match(key)) {
						console.log(`${value} regex triggered by ${tags.username} for message ${message.trim()}`);
						client.say(channel, "/delete " + tags.id);
						throw BreakException;
					}
				});	
		} catch (e) {
			if (e !== BreakException) throw e;
			}
	});
