const a={a11y:{loading_page:n=>{const{normalize:e}=n;return e(["Pagina wordt geladen, even wachten"])},loading_titled_page:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Pagina ",r(o(0))," wordt geladen, even wachten"])},locale_changed:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Taal veranderd naar ",r(o(0))])},locale_changing:n=>{const{normalize:e}=n;return e(["Taal wordt veranderd, even wachten"])},route_loaded:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Pagina ",r(o(0))," geladen"])}},account:{avatar_description:n=>{const{normalize:e,interpolate:r,list:o}=n;return e([r(o(0)),"'s avatar"])},blocked_by:n=>{const{normalize:e}=n;return e(["Je bent geblokkeerd door deze gebruiker."])},blocked_domains:n=>{const{normalize:e}=n;return e(["Geblokkeerde domeinen"])},blocked_users:n=>{const{normalize:e}=n;return e(["Geblokkeerde gebruikers"])},blocking:n=>{const{normalize:e}=n;return e(["Geblokkeerd"])},bot:n=>{const{normalize:e}=n;return e(["BOT"])},favourites:n=>{const{normalize:e}=n;return e(["Favorieten"])},follow:n=>{const{normalize:e}=n;return e(["Volg"])},follow_back:n=>{const{normalize:e}=n;return e(["Volg terug"])},follow_requested:n=>{const{normalize:e}=n;return e(["Aangevraagd"])},followers:n=>{const{normalize:e}=n;return e(["Volgers"])},followers_count:n=>{const{normalize:e,interpolate:r,list:o,plural:t}=n;return t([e([r(o(0))," Volgers"]),e([r(o(0))," Volger"]),e([r(o(0))," Volgers"])])},following:n=>{const{normalize:e}=n;return e(["Volgend"])},following_count:n=>{const{normalize:e,interpolate:r,list:o}=n;return e([r(o(0))," Volgend"])},follows_you:n=>{const{normalize:e}=n;return e(["Volgt jou"])},go_to_profile:n=>{const{normalize:e}=n;return e(["Ga naar profiel"])},joined:n=>{const{normalize:e}=n;return e(["Lid geworden"])},moved_title:n=>{const{normalize:e}=n;return e(["heeft het account verplaatst naar:"])},muted_users:n=>{const{normalize:e}=n;return e(["Gedempte gebruikers"])},muting:n=>{const{normalize:e}=n;return e(["Gedempt"])},mutuals:n=>{const{normalize:e}=n;return e(["Gedeeld"])},notifications_on_post_disable:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["Stop met melden wanneer ",r(o("username"))," post"])},notifications_on_post_enable:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["Meld me wanneer ",r(o("username"))," post"])},pinned:n=>{const{normalize:e}=n;return e(["Gepind"])},posts:n=>{const{normalize:e}=n;return e(["Posts"])},posts_count:n=>{const{normalize:e,interpolate:r,list:o,plural:t}=n;return t([e([r(o(0))," Posts"]),e([r(o(0))," Post"]),e([r(o(0))," Posts"])])},profile_description:n=>{const{normalize:e,interpolate:r,list:o}=n;return e([r(o(0)),"'s profiel koptekst"])},profile_personal_note:n=>{const{normalize:e}=n;return e(["Persoonlijke Nota"])},profile_unavailable:n=>{const{normalize:e}=n;return e(["Profiel niet beschikbaar"])},request_follow:n=>{const{normalize:e}=n;return e(["Verzoek om te volgen"])},unblock:n=>{const{normalize:e}=n;return e([" Deblokkeren"])},unfollow:n=>{const{normalize:e}=n;return e(["Ontvolgen"])},unmute:n=>{const{normalize:e}=n;return e(["Ontdempen"])},view_other_followers:n=>{const{normalize:e}=n;return e(["Volgers van andere servers worden mogelijk niet getoond."])},view_other_following:n=>{const{normalize:e}=n;return e(["Volgend van andere servers worden mogelijk niet getoond."])}},action:{apply:n=>{const{normalize:e}=n;return e(["Toepassen"])},bookmark:n=>{const{normalize:e}=n;return e(["Bookmark"])},bookmarked:n=>{const{normalize:e}=n;return e(["Gebookmarkt"])},boost:n=>{const{normalize:e}=n;return e(["Boost"])},boost_count:n=>{const{normalize:e,interpolate:r,list:o}=n;return e([r(o(0))])},boosted:n=>{const{normalize:e}=n;return e(["Geboost"])},clear_upload_failed:n=>{const{normalize:e}=n;return e(["Wis bestand upload fouten"])},close:n=>{const{normalize:e}=n;return e(["Sluit"])},compose:n=>{const{normalize:e}=n;return e(["Schrijven"])},confirm:n=>{const{normalize:e}=n;return e(["Bevestigen"])},edit:n=>{const{normalize:e}=n;return e(["Aanpassen"])},enter_app:n=>{const{normalize:e}=n;return e(["Ga naar App"])},favourite:n=>{const{normalize:e}=n;return e(["Als favoriet opslaan"])},favourite_count:n=>{const{normalize:e,interpolate:r,list:o}=n;return e([r(o(0))])},favourited:n=>{const{normalize:e}=n;return e(["Als favoriet opgeslagen"])},more:n=>{const{normalize:e}=n;return e(["Meer"])},next:n=>{const{normalize:e}=n;return e(["Volgende"])},prev:n=>{const{normalize:e}=n;return e(["Vorige"])},publish:n=>{const{normalize:e}=n;return e(["Publiceer"])},reply:n=>{const{normalize:e}=n;return e(["Beantwoord"])},reply_count:n=>{const{normalize:e,interpolate:r,list:o}=n;return e([r(o(0))])},reset:n=>{const{normalize:e}=n;return e(["Herstellen"])},save:n=>{const{normalize:e}=n;return e(["Opslaan"])},save_changes:n=>{const{normalize:e}=n;return e(["Aanpassingen opslaan"])},sign_in:n=>{const{normalize:e}=n;return e(["Inloggen"])},switch_account:n=>{const{normalize:e}=n;return e(["Wissel van account"])},vote:n=>{const{normalize:e}=n;return e(["Stem"])}},app_desc_short:n=>{const{normalize:e}=n;return e(["Een vlotte Mastodon web client"])},app_logo:n=>{const{normalize:e}=n;return e(["Elk Logo"])},app_name:n=>{const{normalize:e}=n;return e(["Elk"])},attachment:{edit_title:n=>{const{normalize:e}=n;return e(["Omschrijving"])},remove_label:n=>{const{normalize:e}=n;return e(["Verwijder bijlage"])}},command:{activate:n=>{const{normalize:e}=n;return e(["Activeren"])},complete:n=>{const{normalize:e}=n;return e(["Compleet"])},compose_desc:n=>{const{normalize:e}=n;return e(["Schrijf een nieuwe post"])},"n-people-in-the-past-n-days":n=>{const{normalize:e,interpolate:r,list:o}=n;return e([r(o(0))," mensen in de laatste ",r(o(1))," dagen"])},select_lang:n=>{const{normalize:e}=n;return e(["Selecteer een taal"])},sign_in_desc:n=>{const{normalize:e}=n;return e(["Voeg bestaande account toe"])},switch_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Wissel naar ",r(o(0))])},switch_account_desc:n=>{const{normalize:e}=n;return e(["Wissel naar ander account"])},toggle_dark_mode:n=>{const{normalize:e}=n;return e(["Donkere modus wisselen"])},toggle_zen_mode:n=>{const{normalize:e}=n;return e(["Zen modus wisselen"])}},common:{end_of_list:n=>{const{normalize:e}=n;return e(["Einde van de lijst"])},error:n=>{const{normalize:e}=n;return e(["FOUT"])},in:n=>{const{normalize:e}=n;return e(["in"])},not_found:n=>{const{normalize:e}=n;return e(["404 Niet Gevonden"])},offline_desc:n=>{const{normalize:e}=n;return e(["Zo te zien ben je offline. Controleer je internet verbinding."])}},conversation:{with:n=>{const{normalize:e}=n;return e(["met"])}},error:{account_not_found:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Account ",r(o(0))," niet gevonden"])},"explore-list-empty":n=>{const{normalize:e}=n;return e(["Er is nu niets trending. Kom later terug!"])},file_size_cannot_exceed_n_mb:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Bestandsgrootte mag niet groter zijn dan ",r(o(0)),"MB"])},sign_in_error:n=>{const{normalize:e}=n;return e(["Kan geen verbinding maken met de server."])},status_not_found:n=>{const{normalize:e}=n;return e(["Post niet gevonden"])},unsupported_file_format:n=>{const{normalize:e}=n;return e(["Bestandstype niet ondersteund"])}},help:{desc_highlight:n=>{const{normalize:e}=n;return e(["Je kunt hier en daar wat bugs of ontbrekende features verwachten."])},desc_para1:n=>{const{normalize:e}=n;return e(["Bedankt voor je interesse in het uitproberen van Elk, onze Mastodon web client in-wording!"])},desc_para2:n=>{const{normalize:e}=n;return e(["we werken hard aan nieuwe ontwikkelingen en verbeteringen in de loop van de tijd."])},desc_para3:n=>{const{normalize:e}=n;return e(["Om de ontwikkelingen te versnellen, kun je het Team sponsoren via GitHub Sponsors. We hopen dat Elk je bevalt!"])},desc_para4:n=>{const{normalize:e}=n;return e(["Elk is Open Source. Wil je meehelpen met testen, feedback of bijdragen,"])},desc_para5:n=>{const{normalize:e}=n;return e(["zoek ons op via GitHub"])},desc_para6:n=>{const{normalize:e}=n;return e(["en doe met ons mee."])},title:n=>{const{normalize:e}=n;return e(["Elk is in Preview!"])}},language:{search:n=>{const{normalize:e}=n;return e(["Opzoeken"])}},menu:{block_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Blokkeer ",r(o(0))])},block_domain:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Blokkeer domein ",r(o(0))])},copy_link_to_post:n=>{const{normalize:e}=n;return e(["Kopieer link naar deze post"])},delete:n=>{const{normalize:e}=n;return e(["Verwijder"])},delete_and_redraft:n=>{const{normalize:e}=n;return e(["Verwijder & Opnieuw opstellen"])},direct_message_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Direct bericht naar ",r(o(0))])},edit:n=>{const{normalize:e}=n;return e(["Aanpassen"])},mention_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Noem ",r(o(0))])},mute_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Demp ",r(o(0))])},mute_conversation:n=>{const{normalize:e}=n;return e(["Demp deze post"])},open_in_original_site:n=>{const{normalize:e}=n;return e(["Open in originele site"])},pin_on_profile:n=>{const{normalize:e}=n;return e(["Pin op profiel"])},share_post:n=>{const{normalize:e}=n;return e(["Deel deze post"])},show_untranslated:n=>{const{normalize:e}=n;return e(["Laat onvertaalde versie zien"])},toggle_theme:{dark:n=>{const{normalize:e}=n;return e(["Donkere modus wisselen"])},light:n=>{const{normalize:e}=n;return e(["Lichte modus wisselen"])}},translate_post:n=>{const{normalize:e}=n;return e(["Vertaal post"])},unblock_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Deblokkeer ",r(o(0))])},unblock_domain:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Deblokkeer domein ",r(o(0))])},unmute_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Ontdemp ",r(o(0))])},unmute_conversation:n=>{const{normalize:e}=n;return e(["Ontdemp deze post"])},unpin_on_profile:n=>{const{normalize:e}=n;return e(["Ontpin op profiel"])}},nav:{bookmarks:n=>{const{normalize:e}=n;return e(["Bookmarks"])},built_at:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Gebouwd ",r(o(0))])},conversations:n=>{const{normalize:e}=n;return e(["Conversaties"])},explore:n=>{const{normalize:e}=n;return e(["Ontdekken"])},favourites:n=>{const{normalize:e}=n;return e(["Favorieten"])},federated:n=>{const{normalize:e}=n;return e(["Gefedereerd"])},home:n=>{const{normalize:e}=n;return e(["Home"])},local:n=>{const{normalize:e}=n;return e(["Lokaal"])},notifications:n=>{const{normalize:e}=n;return e(["Meldingen"])},profile:n=>{const{normalize:e}=n;return e(["Profiel"])},search:n=>{const{normalize:e}=n;return e(["Zoeken"])},select_feature_flags:n=>{const{normalize:e}=n;return e(["Selecteer Feature Vlaggen"])},select_font_size:n=>{const{normalize:e}=n;return e(["Font Grootte"])},select_language:n=>{const{normalize:e}=n;return e(["Display Taal"])},settings:n=>{const{normalize:e}=n;return e(["Instellingen"])},show_intro:n=>{const{normalize:e}=n;return e(["Laat intro zien"])},toggle_theme:n=>{const{normalize:e}=n;return e(["Wissel Thema"])},zen_mode:n=>{const{normalize:e}=n;return e(["Zen Modus"])}},notification:{favourited_post:n=>{const{normalize:e}=n;return e(["vindt jouw post leuk"])},followed_you:n=>{const{normalize:e}=n;return e(["volgt jou"])},followed_you_count:n=>{const{normalize:e,interpolate:r,list:o,plural:t}=n;return t([e([r(o(0))," mensen hebben je gevolgd"]),e([r(o(0))," persoon heeft je gevold"]),e([r(o(0))," mensen hebben je gevolgd"])])},missing_type:n=>{const{normalize:e}=n;return e(["MISSEND notificatie.type:"])},reblogged_post:n=>{const{normalize:e}=n;return e(["herblogt je post"])},request_to_follow:n=>{const{normalize:e}=n;return e(["vraagt om jou te volgen"])},signed_up:n=>{const{normalize:e}=n;return e(["ingeschreven"])},update_status:n=>{const{normalize:e}=n;return e(["heeft hun post aangepast"])}},placeholder:{content_warning:n=>{const{normalize:e}=n;return e(["Schrijf je waarschuwing hier"])},default_1:n=>{const{normalize:e}=n;return e(["Waar denk je aan?"])},reply_to_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Reageer op ",r(o(0))])},replying:n=>{const{normalize:e}=n;return e(["Reageren"])}},pwa:{dismiss:n=>{const{normalize:e}=n;return e(["Afwijzen"])},title:n=>{const{normalize:e}=n;return e(["Er is een nieuwe Elk update!"])},update:n=>{const{normalize:e}=n;return e(["Update"])},update_available_short:n=>{const{normalize:e}=n;return e(["Update Elk"])}},search:{search_desc:n=>{const{normalize:e}=n;return e(["Zoek naar mensen & hashtags"])},search_empty:n=>{const{normalize:e}=n;return e(["Deze zoektermen leveren geen resultaat op"])}},settings:{about:{label:n=>{const{normalize:e}=n;return e(["Over"])}},interface:{color_mode:n=>{const{normalize:e}=n;return e(["Kleur Modus"])},dark_mode:n=>{const{normalize:e}=n;return e(["Donkere Modus"])},default:n=>{const{normalize:e}=n;return e([" (standaard)"])},font_size:n=>{const{normalize:e}=n;return e(["Letter Grootte"])},label:n=>{const{normalize:e}=n;return e(["Interface"])},light_mode:n=>{const{normalize:e}=n;return e(["Lichte Modus"])}},language:{display_language:n=>{const{normalize:e}=n;return e(["Weergave taal"])},label:n=>{const{normalize:e}=n;return e(["Taal"])},status:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Vertalingsstatus: ",r(o(0)),"/",r(o(1))," (",r(o(2)),"%)"])},translations:{add:n=>{const{normalize:e}=n;return e(["Toevoegen"])},choose_language:n=>{const{normalize:e}=n;return e(["Kies taal"])},heading:n=>{const{normalize:e}=n;return e(["Vertalingen"])},hide_specific:n=>{const{normalize:e}=n;return e(["Verberg specifieke vertalingen"])},remove:n=>{const{normalize:e}=n;return e(["Verwijder"])}}},notifications:{label:n=>{const{normalize:e}=n;return e(["Meldingen"])},notifications:{label:n=>{const{normalize:e}=n;return e(["Meldingsinstellingen"])}},push_notifications:{alerts:{favourite:n=>{const{normalize:e}=n;return e(["Favorieten"])},follow:n=>{const{normalize:e}=n;return e(["Nieuwe volgers"])},mention:n=>{const{normalize:e}=n;return e([" Vermeldingen"])},poll:n=>{const{normalize:e}=n;return e(["Peilingen"])},reblog:n=>{const{normalize:e}=n;return e(["Herblogt jou post"])},title:n=>{const{normalize:e}=n;return e(["Welke notificaties wil je krijgen?"])}},description:n=>{const{normalize:e}=n;return e(["Ontvang meldingen zelfs wanneer je Elk niet gebruikt."])},instructions:n=>{const{normalize:e,linked:r,type:o}=n;return e(["Vergeet niet om je wijzigingen op te slaan d.m.v. de ",r("settings.notifications.push_notifications.save_settings",void 0,o)," knop!"])},label:n=>{const{normalize:e}=n;return e(["Pushnotificatie instellingen"])},policy:{all:n=>{const{normalize:e}=n;return e(["Van iedereen"])},followed:n=>{const{normalize:e}=n;return e(["Van mensen die ik volg"])},follower:n=>{const{normalize:e}=n;return e(["Van mensen die mij volgen"])},none:n=>{const{normalize:e}=n;return e(["Van niemand"])},title:n=>{const{normalize:e}=n;return e(["Van wie kan ik meldingen krijgen?"])}},save_settings:n=>{const{normalize:e}=n;return e(["Instellingen aanpassingen opslaan"])},subscription_error:{clear_error:n=>{const{normalize:e}=n;return e(["Wis error"])},permission_denied:n=>{const{normalize:e}=n;return e(["Geen toestemming: zet notificaties aan in je browser."])},request_error:n=>{const{normalize:e}=n;return e(["Er is een error tijdens het ophalen van het abonnement, probeer opnieuw en als de error blijft, raporteer het probleem naar de Elk repository."])},title:n=>{const{normalize:e}=n;return e(["Kon niet abonneren op de pushnotificaties"])}},undo_settings:n=>{const{normalize:e}=n;return e(["Veranderde instellingen ongedaan maken"])},unsubscribe:n=>{const{normalize:e}=n;return e(["Zet pushnotificaties uit"])},unsupported:n=>{const{normalize:e}=n;return e(["Je browser ondersteunt geen pushnotificaties."])},warning:{enable_close:n=>{const{normalize:e}=n;return e(["Sluit"])},enable_description:n=>{const{normalize:e,linked:r,type:o}=n;return e(['Om meldingen te krijgen terwijl Elk niet actief is, zet pushnotificaties aan. Je kan precies instellen wat voor type interacties pushnotificaties genereren via de "',r("notification.settings.show_btn",void 0,o),'"'," knop hierboven wanneer ze aan staan."])},enable_description_settings:n=>{const{normalize:e}=n;return e(["Om meldingen te ontvangen wanneer Elk niet actief is, schakel pushnotificaties in. Je kunt precies instellen welke soorten interacties pushnotificaties genereren in dit venster zodra je ze hebt inschakelt."])},enable_desktop:n=>{const{normalize:e}=n;return e(["Zet pushnotificaties aan"])},enable_title:n=>{const{normalize:e}=n;return e(["Mis niets"])},re_auth:n=>{const{normalize:e}=n;return e(["Het lijkt erop dat je server geen pushnotificaties ondersteunt. Probeer uitloggen en opnieuw inloggen. Neem contact op met de serverbeheerder als dit bericht nog steeds verschijnt."])}}},show_btn:n=>{const{normalize:e}=n;return e(["Ga naar meldingsinstellingen"])}},notifications_settings:n=>{const{normalize:e}=n;return e(["Meldingen"])},preferences:{label:n=>{const{normalize:e}=n;return e(["Voorkeuren"])}},profile:{appearance:{bio:n=>{const{normalize:e}=n;return e(["Bio"])},description:n=>{const{normalize:e}=n;return e(["Aanpassen van avatar, gebruikersnaam, profiel, etc."])},display_name:n=>{const{normalize:e}=n;return e(["Zichtbare naam"])},label:n=>{const{normalize:e}=n;return e(["Uiterlijk"])},profile_metadata:n=>{const{normalize:e}=n;return e(["Profiel metadata"])},profile_metadata_desc:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Je kan tot en met ",r(o(0))," elementen als tabel op je profiel zetten"])},title:n=>{const{normalize:e}=n;return e(["Aanpassen profiel"])}},featured_tags:{description:n=>{const{normalize:e}=n;return e(["Mensen kunnen je publieke posts vinden onder deze hashtags."])},label:n=>{const{normalize:e}=n;return e(["Uitgelichte hashtags"])}},label:n=>{const{normalize:e}=n;return e(["Profiel"])}},select_a_settings:n=>{const{normalize:e}=n;return e(["Selecteer een instelling"])},users:{export:n=>{const{normalize:e}=n;return e(["Exporteer Gebruikers Tokens"])},import:n=>{const{normalize:e}=n;return e(["Importeer Gebruikers Tokens"])},label:n=>{const{normalize:e}=n;return e(["Ingelogde gebruikers"])}}},state:{attachments_exceed_server_limit:n=>{const{normalize:e}=n;return e(["De hoeveelheid bijlagen is meer dan het limiet per post."])},attachments_limit_error:n=>{const{normalize:e}=n;return e(["Limiet per post overschreden"])},edited:n=>{const{normalize:e}=n;return e(["(Aangepast)"])},editing:n=>{const{normalize:e}=n;return e(["Aanpassen"])},loading:n=>{const{normalize:e}=n;return e(["Laden..."])},upload_failed:n=>{const{normalize:e}=n;return e(["Upload mislukt"])},uploading:n=>{const{normalize:e}=n;return e(["Uploading..."])}},status:{edited:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Aangepast ",r(o(0))])},filter_hidden_phrase:n=>{const{normalize:e}=n;return e(["Gefilterd door"])},filter_show_anyway:n=>{const{normalize:e}=n;return e(["Laat toch zien"])},img_alt:{desc:n=>{const{normalize:e}=n;return e(["Omschrijving"])},dismiss:n=>{const{normalize:e}=n;return e(["Afwijzen"])}},poll:{count:n=>{const{normalize:e,interpolate:r,list:o,plural:t}=n;return t([e([r(o(0))," stemmen"]),e([r(o(0))," stem"]),e([r(o(0))," stemmen"])])},ends:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["eindigt ",r(o(0))])},finished:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["geëindigd ",r(o(0))])}},someone:n=>{const{normalize:e}=n;return e(["Iemand"])},spoiler_show_less:n=>{const{normalize:e}=n;return e(["Minder zien"])},spoiler_show_more:n=>{const{normalize:e}=n;return e(["Meer zien"])},try_original_site:n=>{const{normalize:e}=n;return e(["Probeer originele site"])}},status_history:{created:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["gecreëerd ",r(o(0))])},edited:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["aangepast ",r(o(0))])}},tab:{for_you:n=>{const{normalize:e}=n;return e(["Voor jou"])},hashtags:n=>{const{normalize:e}=n;return e(["Hashtags"])},media:n=>{const{normalize:e}=n;return e(["Media"])},news:n=>{const{normalize:e}=n;return e(["Nieuws"])},notifications_all:n=>{const{normalize:e}=n;return e(["Alles"])},notifications_mention:n=>{const{normalize:e}=n;return e(["Vermelding"])},posts:n=>{const{normalize:e}=n;return e(["Posts"])},posts_with_replies:n=>{const{normalize:e}=n;return e(["Posts & Reacties"])}},tag:{follow:n=>{const{normalize:e}=n;return e(["Volg"])},follow_label:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Volg ",r(o(0))," tag"])},unfollow:n=>{const{normalize:e}=n;return e(["Ontvolg"])},unfollow_label:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Ontvolg ",r(o(0))," tag"])}},time_ago_options:{day_future:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["in 0 dagen"]),e(["morgen"]),e(["in ",r(o("n"))," dagen"])])},day_past:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["0 dagen geleden"]),e(["gisteren"]),e([r(o("n"))," dagen geleden"])])},hour_future:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["in 0 uur"]),e(["in 1 uur"]),e(["in ",r(o("n"))," uur"])])},hour_past:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["0 uur geleden"]),e(["1 uur geleden"]),e([r(o("n"))," uur geleden"])])},just_now:n=>{const{normalize:e}=n;return e(["nu net"])},minute_future:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["in 0 minuten"]),e(["in 1 minuut"]),e(["in ",r(o("n"))," minuten"])])},minute_past:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["0 minuten geleden"]),e(["1 minuut geleden"]),e([r(o("n"))," minuten geleden"])])},month_future:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["in 0 maanden"]),e(["volgende maand"]),e(["in ",r(o("n"))," maanden"])])},month_past:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["0 maanden geleden"]),e(["laatste maand"]),e([r(o("n"))," maanden geleden"])])},second_future:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["nu net"]),e(["in ",r(o("n"))," seconden"]),e(["in ",r(o("n"))," seconden"])])},second_past:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["nu net"]),e([r(o("n"))," seconden geleden"]),e([r(o("n"))," seconden geleden"])])},short_day_future:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["in ",r(o("n")),"d"])},short_day_past:n=>{const{normalize:e,interpolate:r,named:o}=n;return e([r(o("n")),"d"])},short_hour_future:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["in ",r(o("n")),"u"])},short_hour_past:n=>{const{normalize:e,interpolate:r,named:o}=n;return e([r(o("n")),"u"])},short_minute_future:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["in ",r(o("n")),"min"])},short_minute_past:n=>{const{normalize:e,interpolate:r,named:o}=n;return e([r(o("n")),"min"])},short_month_future:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["in ",r(o("n")),"ma"])},short_month_past:n=>{const{normalize:e,interpolate:r,named:o}=n;return e([r(o("n")),"ma"])},short_second_future:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["in ",r(o("n")),"s"])},short_second_past:n=>{const{normalize:e,interpolate:r,named:o}=n;return e([r(o("n")),"s"])},short_week_future:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["in ",r(o("n")),"w"])},short_week_past:n=>{const{normalize:e,interpolate:r,named:o}=n;return e([r(o("n")),"w"])},short_year_future:n=>{const{normalize:e,interpolate:r,named:o}=n;return e(["in ",r(o("n")),"j"])},short_year_past:n=>{const{normalize:e,interpolate:r,named:o}=n;return e([r(o("n")),"j"])},week_future:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["in 0 weken"]),e(["volgende week"]),e(["in ",r(o("n"))," weken"])])},week_past:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["0 weken geleden"]),e(["vorige week"]),e([r(o("n"))," weken geleden"])])},year_future:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["in 0 jaar"]),e(["volgend jaar"]),e(["in ",r(o("n"))," jaar"])])},year_past:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["0 jaar geleden"]),e(["vorig jaar"]),e([r(o("n"))," jaar geleden"])])}},timeline:{show_new_items:n=>{const{normalize:e,interpolate:r,named:o,plural:t}=n;return t([e(["Laat ",r(o("v"))," nieuwe artikelen zien"]),e(["Laat ",r(o("v"))," nieuw artikel zien"]),e(["Laat ",r(o("v"))," nieuwe artikelen zien"])])}},title:{federated_timeline:n=>{const{normalize:e}=n;return e(["Gefedereerde Tijdlijn"])},local_timeline:n=>{const{normalize:e}=n;return e(["Lokale Tijdlijn"])}},tooltip:{add_content_warning:n=>{const{normalize:e}=n;return e(["Voeg inhoud waarschuwing toe"])},add_media:n=>{const{normalize:e}=n;return e(["Voeg fotos, een video of een audio bestand toe"])},change_content_visibility:n=>{const{normalize:e}=n;return e(["Verander inhoud zichtbaarheid"])},change_language:n=>{const{normalize:e}=n;return e(["Verander taal"])},emoji:n=>{const{normalize:e}=n;return e(["Emoji"])},explore_links_intro:n=>{const{normalize:e}=n;return e(["Over deze nieuws artikelen wordt veel gepraat op deze en anderen servers op het decentralized network op dit moment."])},explore_posts_intro:n=>{const{normalize:e}=n;return e(["Deze posts van deze en andere servers op het decentralized network krijgen veel aandacht op deze server op dit moment."])},explore_tags_intro:n=>{const{normalize:e}=n;return e(["Deze hashtags krijgen veel aandacht op dit moment op deze en andere servers op het decentralized network."])},toggle_code_block:n=>{const{normalize:e}=n;return e(["Zet code blok aan/uit"])}},user:{add_existing:n=>{const{normalize:e}=n;return e(["Voeg een bestaand account toe"])},server_address_label:n=>{const{normalize:e}=n;return e(["Mastodon Server Address"])},sign_in_desc:n=>{const{normalize:e}=n;return e(["Log in om profielen te volgen of hashtags, markeer posts als favoriet, deel en reageer op posts, of reageer vanaf je account op een andere server."])},sign_in_notice_title:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Je bekijkt ",r(o(0))," publieke data"])},sign_out_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Uitloggen ",r(o(0))])},tip_no_account:n=>{const{normalize:e,interpolate:r,list:o}=n;return e(["Als je nog geen Mastodon account hebt, ",r(o(0)),"."])},tip_register_account:n=>{const{normalize:e}=n;return e(["kies jouw server en registreer een account"])}},visibility:{direct:n=>{const{normalize:e}=n;return e(["Direct"])},direct_desc:n=>{const{normalize:e}=n;return e(["Alleen zichtbaar voor vermelde gebruikers"])},private:n=>{const{normalize:e}=n;return e(["Alleen volgers"])},private_desc:n=>{const{normalize:e}=n;return e(["Alleen zichtbaar voor volgers"])},public:n=>{const{normalize:e}=n;return e(["Publiek"])},public_desc:n=>{const{normalize:e}=n;return e(["Zichtbaar voor iedereen"])},unlisted:n=>{const{normalize:e}=n;return e(["Niet vermeld"])},unlisted_desc:n=>{const{normalize:e}=n;return e(["Zichtbaar voor iedereen, maar kan niet gevonden worden via discovery functies"])}}};export{a as default};
