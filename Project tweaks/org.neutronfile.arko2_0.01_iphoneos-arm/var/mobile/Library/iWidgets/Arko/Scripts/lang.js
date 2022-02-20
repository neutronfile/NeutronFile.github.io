var Lang = "en"; 
if (Lang == "en") {
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var shortdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var shortmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var hourtext = ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
    var weatherdesc = ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"];
} 
if (Lang == "id") {
    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var shortdays = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    var months=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","November","Desember"];
    var shortmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Nov", "Dec "];
    var hourtext = ["Dua Belas", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sembilan", "Sepuluh", "Sebelas", "Dua Belas", "Satu", "Dua", "Tiga", "Empat", "Lima", " Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sepuluh", "Sebelas", "Dua belas"];
    var weatherdesc = ["Tornado", "Badai Tropis", "Badai", "Badai Petir", "Badai Petir", "Salju", "Hujan Batu", "Hujan Batu", "Hujan Batu", "Gerimis Pembekuan", "Gerimis", "Hujan Beku" , "Hujan", "Hujan", "Hujan", "Salju", "Salju", "Salju", "Hujan Es", "Hujan Es", "Debu", "Debu", "Kabut", "Kabut", "Berasap", "Kencang", "Berangin", "Dingin", "Berawan", "Berawan", "Berawan", "Berawan", "Berawan", "Cerah", "Cerah", "Cerah", "Terang", "Terang", "Hujan Batu", "Panas", "Badai Petir", "Badai Petir", "Badai Petir", "Hujan", "Salju Lebat", "Salju Ringan", "Salju Lebat", "Salju Mendung", "Hujan Badai", "Badai Petir", "Salju", "Badai", "kosong"];
} 
if (Lang == "it") {
    var days = ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'];
    var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    var shortmonths = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
    var shortdays = ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"];
    var weatherdesc = ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"];
}
if (Lang == "ca") {
    var days = ["Domingo", "Lunes", "Martes", "MiÃ©rcoles", "Jueves", "Viernes", "SÃ¡bado"];
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var shortmonths = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"];
    var shortdays = ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡"];
    var hourtext = ["doce", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"];
    var weatherdesc = ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"];
}
if (Lang == "de") {
    var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    var months = ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Ju li", "August", "September", "Oktober", "November", "Dez ember"];
    var shortmonths = ["Jan", "Feb", "MÃ¤", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "];
    var shortdays = ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"];
    var hourtext = ["null", "ein", "zwei", "drei", "vier", "f¸nf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwˆlf", "dreizehn", "vierzehn", "f¸nfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig", "einundzwanzig", "zweiundzwanzig", "dreiundzwanzig", "null"];
    var weatherdesc = ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "SchneegestÃ¶ber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "StÃ¼rmisch", "Windig", "Kalt", "BewÃ¶lkt", "Meist BewÃ¶lkt", "Meist BewÃ¶lkt", "BewÃ¶lkt", "BewÃ¶lkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Ã–rtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "BewÃ¶lkt", "Gewitter", "Scheeschauer", "Ã–rtliche Gewitterschauer", "Nicht VerfÃ¼gbar"];
}
if (Lang == "fr") {
    var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var months = ["Janvie", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"];
    var shortmonths = ["Jan", "FÃ©v", "Mar", "Avr", "Mai", "Jui", "Jui", "AoÃ»", "Sep", "Oct", "Nov", "DÃ©c"];
    var shortdays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    var hourtext = ["minuit", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "midi", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "minuit"];
    var weatherdesc = ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "GrÃƒÂªle", "Neige Fondue", "PoussiÃƒÂ©reux", "Brouillard", "Brume", "Brumeux", "TempÃƒÂªte", "Vent", "Temps Froid", "Temps Nuageux ", "TrÃƒÂ¨s Nuageux", "TrÃƒÂ¨s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et GrÃƒÂªles", "Temps Chaud", "Orages IsolÃƒÂ©s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages IsolÃƒÂ©s", "Non Disponible"];
}
if (Lang == "cn_s") {
    var days = ['æ˜ŸæœŸæ—¥', 'æ˜ŸæœŸä¸€', 'æ˜ŸæœŸäºŒ', 'æ˜ŸæœŸä¸‰', 'æ˜ŸæœŸå››', 'æ˜ŸæœŸäº”', 'æ˜ŸæœŸå…­'];
    var months = ['ä¸€æœˆ', 'äºŒæœˆ', 'ä¸‰æœˆ', 'å››æœˆ', 'äº”æœˆ', 'å…­æœˆ', 'ä¸ƒæœˆ', 'å…«æœˆ', 'ä¹æœˆ', 'åæœˆ', 'åä¸€æœˆ', 'åäºŒæœˆ'];
    var shortmonths = ['ä¸€', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­', 'ä¸ƒ', 'å…«', 'ä¹', 'å', 'åä¸€', 'åäºŒ'];
    var shortdays = ['å‘¨æ—¥', 'å‘¨ä¸€', 'å‘¨äºŒ', 'å‘¨ä¸‰', 'å‘¨å››', 'å‘¨äº”', 'å‘¨å…­'];
    var weatherdesc = ["é¾™å·é£Ž", "çƒ­å¸¦é£Žæš´", "é£“é£Ž", "é›·æš´", "é›·æš´", "é›ª", "é›¨é›ª", "é›¨é›ª", "å†»æ¯›æ¯›é›¨", "ç»†é›¨", "å†»é›¨", "æ·‹æµ´", "æ·‹æµ´", "é£˜é›ª", "é›ª", "é›ª", "é›ª", "Hail", "é›¨é›ª", "å°˜", "ç‰™é½¿", "é˜´éœ¾", "çƒŸ", "é£Žèµ·äº‘æ¶Œ", "æœ‰é£Ž", "å†·", "å¤šäº‘", "å¤šäº‘", "å¤šäº‘", "å¤šäº‘", "å¤šäº‘", "æ˜Žç¡®", "æ™´æœ—", "å…¬å¹³", "å…¬å¹³", "é›¨é›ª", "Hot", "é›·æš´", "é›·æš´", "é›·æš´", "æ·‹æµ´", "å¤§é›ª", "å°é›ª", "å¤§é›ª", "åŠ å¤šäº‘", "é›·æš´", "é›ª", "é›·æš´", "ç©ºç™½"];
} 

