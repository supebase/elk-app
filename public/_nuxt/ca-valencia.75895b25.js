const t={a11y:{loading_page:n=>{const{normalize:e}=n;return e(["S'està carregant"])},loading_titled_page:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["S'està carregant la pàgina ",r(a(0))])},locale_changed:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["S'ha canviat la llengua a ",r(a(0))])},locale_changing:n=>{const{normalize:e}=n;return e(["S'està canviant la llengua"])}},account:{avatar_description:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Foto de perfil de: ",r(a(0))])},blocked_by:n=>{const{normalize:e}=n;return e(["Este usuari t'ha bloquejat"])},blocked_domains:n=>{const{normalize:e}=n;return e(["Domini bloquejat"])},favourites:n=>{const{normalize:e}=n;return e(["Preferit"])},follow_back:n=>{const{normalize:e}=n;return e(["Segueix també"])},follow_requested:n=>{const{normalize:e}=n;return e(["Sol·licitat"])},go_to_profile:n=>{const{normalize:e}=n;return e(["Ves al perfil"])},joined:n=>{const{normalize:e}=n;return e(["Data d'unió"])},moved_title:n=>{const{normalize:e}=n;return e(["ha indicat que el seu compte és ara:"])},notifications_on_post_disable:n=>{const{normalize:e,interpolate:r,named:a}=n;return e(["No em notifiques quan ",r(a("username"))," publique"])},notifications_on_post_enable:n=>{const{normalize:e,interpolate:r,named:a}=n;return e(["Notifica'm quan ",r(a("username"))," publique"])},profile_description:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Capçalera de: ",r(a(0))])},unmute:n=>{const{normalize:e}=n;return e(["Deixa de silenciar"])},view_other_followers:n=>{const{normalize:e}=n;return e(["És possible que no es mostren els seguidors d'altres instàncies."])},view_other_following:n=>{const{normalize:e}=n;return e(["És possible que no es mostren els seguits d'altres instàncies."])}},action:{apply:n=>{const{normalize:e}=n;return e(["Aplica"])},bookmark:n=>{const{normalize:e}=n;return e(["Afig als marcadors"])},bookmarked:n=>{const{normalize:e}=n;return e(["Als marcadors"])},boost:n=>{const{normalize:e}=n;return e(["Impulsa"])},boosted:n=>{const{normalize:e}=n;return e(["Impulsat"])},clear_upload_failed:n=>{const{normalize:e}=n;return e(["Esborra els errors de la pujada de fitxers"])},compose:n=>{const{normalize:e}=n;return e(["Redacta"])},confirm:n=>{const{normalize:e}=n;return e(["Confirma"])},favourite:n=>{const{normalize:e}=n;return e(["Marca com a preferit"])},favourited:n=>{const{normalize:e}=n;return e(["Preferit"])},publish:n=>{const{normalize:e}=n;return e(["Publica"])}},app_desc_short:n=>{const{normalize:e}=n;return e(["Un client web Mastodon àgil"])},app_logo:n=>{const{normalize:e}=n;return e(["Logo d'Elk"])},attachment:{remove_label:n=>{const{normalize:e}=n;return e(["Elimina l'adjunt"])}},command:{activate:n=>{const{normalize:e}=n;return e(["Activa"])},"n-people-in-the-past-n-days":n=>{const{normalize:e,interpolate:r,list:a}=n;return e([r(a(0))," persones en els últims ",r(a(1))," dies"])},select_lang:n=>{const{normalize:e}=n;return e(["Selecciona una llengua"])},sign_in_desc:n=>{const{normalize:e}=n;return e(["Afig un compte existent"])},toggle_dark_mode:n=>{const{normalize:e}=n;return e(["Activa el mode fosc"])},toggle_zen_mode:n=>{const{normalize:e}=n;return e(["Activa el mode zen"])}},common:{end_of_list:n=>{const{normalize:e}=n;return e(["Fi de la llista"])},in:n=>{const{normalize:e}=n;return e(["in"])},not_found:n=>{const{normalize:e}=n;return e(["404 No s'ha trobat"])},offline_desc:n=>{const{normalize:e}=n;return e(["Sembla que estàs fora de línia. Comprova la connexió de xarxa."])}},confirm:{block_account:{cancel:n=>{const{normalize:e}=n;return e(["Cancel·la"])},confirm:n=>{const{normalize:e}=n;return e(["Bloqueja"])},title:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Segur que vols bloquejar ",r(a(0)),"?"])}},block_domain:{cancel:n=>{const{normalize:e}=n;return e(["Cancel·la"])},confirm:n=>{const{normalize:e}=n;return e(["Bloqueja"])},title:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Segur que vols bloquejar ",r(a(0)),"?"])}},delete_list:{cancel:n=>{const{normalize:e}=n;return e(["Cancel·la"])},confirm:n=>{const{normalize:e}=n;return e(["Elimina"])},title:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Segur que vols eliminar la llista «",r(a(0)),"»?"])}},delete_posts:{cancel:n=>{const{normalize:e}=n;return e(["Cancel·la"])},confirm:n=>{const{normalize:e}=n;return e(["Elimina"])},title:n=>{const{normalize:e}=n;return e(["Segur que vols eliminar la publicació?"])}},mute_account:{cancel:n=>{const{normalize:e}=n;return e(["Cancel·la"])},confirm:n=>{const{normalize:e}=n;return e(["Silencia"])},title:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Segur que vols silenciar ",r(a(0)),"?"])}},show_reblogs:{cancel:n=>{const{normalize:e}=n;return e(["Cancel·la"])},confirm:n=>{const{normalize:e}=n;return e(["Mostra"])},title:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Segur que vols mostrar els impulsos de: ",r(a(0)),"?"])}},unfollow:{cancel:n=>{const{normalize:e}=n;return e(["Cancel·la"])},title:n=>{const{normalize:e}=n;return e(["Segur que vols deixar de seguir-lo?"])}}},custom_cards:{stackblitz:{open:n=>{const{normalize:e}=n;return e(["Obri"])},snippet_from:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Fragment de: ",r(a(0))])}}},error:{"explore-list-empty":n=>{const{normalize:e}=n;return e(["No hi ha res en tendències. Comprova-ho més tard!"])},file_size_cannot_exceed_n_mb:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["El fitxer no pot superar els ",r(a(0))," MB"])},unsupported_file_format:n=>{const{normalize:e}=n;return e(["Format del fitxer no compatible"])}},help:{build_preview:{desc1:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Estàs veient una versió prèvia d'Elk de la comunitat - ",r(a(0)),"."])},desc2:n=>{const{normalize:e}=n;return e(["Pot contindre canvis no revisats o fins i tot maliciosos."])},desc3:n=>{const{normalize:e}=n;return e(["No inicies sessió amb el teu compte real."])}},desc_highlight:n=>{const{normalize:e}=n;return e(["Espereu trobar alguns errors i que falten funcions ací i allà."])},desc_para1:n=>{const{normalize:e}=n;return e(["Gràcies pel teu interès en provar Elk, el nostre client web Mastodon en procés"])},desc_para2:n=>{const{normalize:e}=n;return e(["estem treballant de valent en el desenvolupament i en millorar-lo."])},desc_para3:n=>{const{normalize:e}=n;return e(["Per a impulsar el desenvolupament, pots patrocinar l'equip a través dels patrocis de GitHub. Esperem que gaudisques d'Elk!"])},desc_para4:n=>{const{normalize:e}=n;return e(["Elk és de codi obert. Si vols ajudar amb proves, comentaris o contribucions,"])},desc_para5:n=>{const{normalize:e}=n;return e(["troba'ns a GitHub"])},desc_para6:n=>{const{normalize:e}=n;return e(["i col·labora."])},footer_team:n=>{const{normalize:e}=n;return e(["L'equip d'Elk"])},title:n=>{const{normalize:e}=n;return e(["Elk està en proves!"])}},list:{add_account:n=>{const{normalize:e}=n;return e(["Afig el compte a una llista"])},create:n=>{const{normalize:e}=n;return e(["Crea"])},delete:n=>{const{normalize:e}=n;return e(["Elimina la llista"])},delete_error:n=>{const{normalize:e}=n;return e(["S'ha produït un error en eliminar la llista"])},edit:n=>{const{normalize:e}=n;return e(["Edita la llista"])},modify_account:n=>{const{normalize:e}=n;return e(["Edita les llistes amb este compte"])},remove_account:n=>{const{normalize:e}=n;return e(["Elimina el compte d'una llista"])}},menu:{copy_link_to_post:n=>{const{normalize:e}=n;return e(["Copia l'enllaç a la publicació"])},copy_original_link_to_post:n=>{const{normalize:e}=n;return e(["Copia l'enllaç original a la publicació"])},delete:n=>{const{normalize:e}=n;return e(["Elimina"])},delete_and_redraft:n=>{const{normalize:e}=n;return e(["Elimina i fes un esborrany"])},direct_message_account:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Envia un missatge directe a ",r(a(0))])},hide_reblogs:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Amaga els impulsos de: ",r(a(0))])},mention_account:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Menciona ",r(a(0))])},mute_conversation:n=>{const{normalize:e}=n;return e(["Silencia esta publicació"])},open_in_original_site:n=>{const{normalize:e}=n;return e(["Obri en el lloc original"])},share_post:n=>{const{normalize:e}=n;return e(["Comparteix la publicació"])},show_favourited_and_boosted_by:n=>{const{normalize:e}=n;return e(["Mostra qui ho ha marcat com a preferit i impulsat"])},show_reblogs:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Mostra els impulsos de: ",r(a(0))])},toggle_theme:{dark:n=>{const{normalize:e}=n;return e(["Activa el mode fosc"])},light:n=>{const{normalize:e}=n;return e(["Activa el mode clar"])}},unmute_conversation:n=>{const{normalize:e}=n;return e(["Deixa de silenciar la publicació"])},unpin_on_profile:n=>{const{normalize:e}=n;return e(["Deixa de fixar-ho al perfil"])}},nav:{blocked_users:n=>{const{normalize:e}=n;return e(["Usuarid bloquejats"])},built_at:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Compilat ",r(a(0))])},compose:n=>{const{normalize:e}=n;return e(["Redacta"])},federated:n=>{const{normalize:e}=n;return e(["Federada"])},privacy:n=>{const{normalize:e}=n;return e(["Privacitat"])},select_feature_flags:n=>{const{normalize:e}=n;return e(["Toggle Feature Flags"])},select_font_size:n=>{const{normalize:e}=n;return e(["Grandària de la lletra"])},select_language:n=>{const{normalize:e}=n;return e(["Llengua a mostrar"])}},notification:{favourited_post:n=>{const{normalize:e}=n;return e(["ha marcat com a preferit"])},followed_you_count:n=>{const{normalize:e,interpolate:r,list:a,plural:o}=n;return o([e([r(a(0))," persones t'han seguit"]),e([r(a(0))," persona t'ha seguit"]),e([r(a(0))," persones t'han seguit"])])},missing_type:n=>{const{normalize:e}=n;return e(["MISSING notification.type:"])},reblogged_post:n=>{const{normalize:e}=n;return e(["t'ha impulsat"])},request_to_follow:n=>{const{normalize:e}=n;return e(["ha demanat seguir-te"])},signed_up:n=>{const{normalize:e}=n;return e(["s'ha registrat"])},update_status:n=>{const{normalize:e}=n;return e(["ha actualitzat la publicació"])}},placeholder:{content_warning:n=>{const{normalize:e}=n;return e(["Escriu ací l'avís"])}},pwa:{dismiss:n=>{const{normalize:e}=n;return e(["Omet"])},install:n=>{const{normalize:e}=n;return e(["Instal·la"])},install_title:n=>{const{normalize:e}=n;return e(["Instal·la Elk"])},title:n=>{const{normalize:e}=n;return e(["Hi ha una actualització d'Elk disponible!"])},update:n=>{const{normalize:e}=n;return e(["Actualitza"])},webmanifest:{canary:{description:n=>{const{normalize:e}=n;return e(["Un client web àgil de Mastodon (canary)"])},name:n=>{const{normalize:e}=n;return e(["Elk (canary)"])},short_name:n=>{const{normalize:e}=n;return e(["Elk (canary)"])}},dev:{description:n=>{const{normalize:e}=n;return e(["Un client web àgil de Mastodon (desenvolupament)"])},name:n=>{const{normalize:e}=n;return e(["Elk (desenvolupament)"])}},preview:{description:n=>{const{normalize:e}=n;return e(["Un client web àgil de Mastodon (vista prèvia)"])}},release:{description:n=>{const{normalize:e}=n;return e(["Un client web àgil de Mastodon"])}}}},search:{search_desc:n=>{const{normalize:e}=n;return e(["Cerca persones i etiquetes"])},search_empty:n=>{const{normalize:e}=n;return e(["No s'ha trobat res per al termes de la cerca"])}},settings:{about:{built_at:n=>{const{normalize:e}=n;return e(["Compilació"])},label:n=>{const{normalize:e}=n;return e(["Quant a"])},sponsor_action_desc:n=>{const{normalize:e}=n;return e(["Per a ajudar l'equip a desenvolupar Elk"])},sponsors:n=>{const{normalize:e}=n;return e(["Patrocinis"])},sponsors_body_2:n=>{const{normalize:e}=n;return e(["I totes les empreses i individus que patrocinen l'equip d'Elk i els membres."])},sponsors_body_3:n=>{const{normalize:e}=n;return e(["Si t'agrada l'aplicació, considera patrocinar-nos:"])}},account_settings:{description:n=>{const{normalize:e}=n;return e(["Edita la configuració del teu compte a la interfície de Mastodon"])}},interface:{default:n=>{const{normalize:e}=n;return e([" (per defecte)"])},font_size:n=>{const{normalize:e}=n;return e(["Grandària de la lletra"])},theme_color:n=>{const{normalize:e}=n;return e(["Color de tema"])}},language:{display_language:n=>{const{normalize:e}=n;return e(["Llengua a mostrar"])},label:n=>{const{normalize:e}=n;return e(["Llengua"])},translations:{add:n=>{const{normalize:e}=n;return e(["Afig"])},choose_language:n=>{const{normalize:e}=n;return e(["Tria una llengua"])},remove:n=>{const{normalize:e}=n;return e(["Elimina"])}}},notifications:{notifications:{label:n=>{const{normalize:e}=n;return e(["Configuració de les notificacions"])}},push_notifications:{alerts:{follow:n=>{const{normalize:e}=n;return e(["Seguidors nous"])},reblog:n=>{const{normalize:e}=n;return e(["Impulsos en publicacions teues"])},title:n=>{const{normalize:e}=n;return e(["Quines notificacions rebré?"])}},description:n=>{const{normalize:e}=n;return e(["Rep notificacions fins i tot quan no estigues utilitzant Elk."])},instructions:n=>{const{normalize:e,linked:r,type:a}=n;return e(["No oblides desar els canvis utilitzant el botó de ",r("settings.notifications.push_notifications.save_settings!",void 0,a)])},label:n=>{const{normalize:e}=n;return e(["Configuració de les notificacions emergents"])},policy:{all:n=>{const{normalize:e}=n;return e(["De tots"])},followed:n=>{const{normalize:e}=n;return e(["De persones que seguisc"])},follower:n=>{const{normalize:e}=n;return e(["De persones que em segueixen"])},title:n=>{const{normalize:e}=n;return e(["De qui rebré notificacions?"])}},save_settings:n=>{const{normalize:e}=n;return e(["Desa la configuració"])},subscription_error:{invalid_vapid_key:n=>{const{normalize:e}=n;return e(["Sembla que la clau pública VAPID no és vàlida."])},permission_denied:n=>{const{normalize:e}=n;return e(["Permís denegat: activa les notificacions al navegador."])},repo_link:n=>{const{normalize:e}=n;return e(["Repositori d'Elk a GitHub"])},request_error:n=>{const{normalize:e}=n;return e(["S'ha produït un error en sol·licitar la subscripció, torna-ho a provar i si l'error persisteix, informa del problema al repositori d'Elk."])},title:n=>{const{normalize:e}=n;return e(["No s'han pogut activar les notificacions emergents"])},too_many_registrations:n=>{const{normalize:e}=n;return e(["A causa de les limitacions del navegador, Elk no pot utilitzar el servei de notificacions emergents per a diversos comptes en diferents servidors. Hauries de desactivar les notificacions emergents de l'altre compte i tornar-ho a provar."])},vapid_not_supported:n=>{const{normalize:e}=n;return e(["El navegador admet les notificacions emergents web, però sembla que no ha implementat el protocol VAPID."])}},title:n=>{const{normalize:e}=n;return e(["Configuració de les notificacions emergents"])},undo_settings:n=>{const{normalize:e}=n;return e(["Desfés els canvis"])},unsubscribe:n=>{const{normalize:e}=n;return e(["Desactiva les notificacions emergents"])},unsupported:n=>{const{normalize:e}=n;return e(["Les notificacions emergents no són compatibles amb el teu navegador."])},warning:{enable_description:n=>{const{normalize:e,linked:r,type:a}=n;return e([`Per a rebre notificacions quan Elk no estiga obert, activa les notificacions emergents. Pots definir de quin tipus d'interaccions vols rebre notificacions emergents des del botó "`,r("settings.notifications.show_btn",void 0,a),'"'," quan les hages activat."])},enable_description_desktop:n=>{const{normalize:e}=n;return e([`Per a rebre notificacions quan Elk no estiga obert, activa les notificacions emergents. Pots definir de quin tipus d'interaccions vols rebre notificacions emergents des de "Configuració > Notificacions > Configuració de les notificacions emergents" quan les hages activat.`])},enable_description_mobile:n=>{const{normalize:e}=n;return e(['També pots accedir a la configuració de del menú "Configuració > Notificacions > Configuració de les notificacions emergents".'])},enable_description_settings:n=>{const{normalize:e}=n;return e(["Per a rebre notificacions quan Elk no estiga obert, activa les notificacions emergents. Pots definir de quin tipus d'interaccions vols rebre notificacions emergents d'esta pantalla quan les hages activat."])},enable_desktop:n=>{const{normalize:e}=n;return e(["Activa les notificacions emergents"])},enable_title:n=>{const{normalize:e}=n;return e(["No et perdes res"])},re_auth:n=>{const{normalize:e}=n;return e(["Sembla que les notificacions emergents no són compatibles amb el teu servidor. Prova tancant la sessió i tornant a entrar. Si este missatge encara apreix, posa't en contacte amb l'administració del teu servidor."])}}},show_btn:n=>{const{normalize:e}=n;return e(["Ves a la configuració de les notificacions"])}},preferences:{enable_pinch_to_zoom:n=>{const{normalize:e}=n;return e(["Activa el pessic per a fer zoom"])},github_cards:n=>{const{normalize:e}=n;return e(["GitHub Cards"])},grayscale_mode:n=>{const{normalize:e}=n;return e(["Mode en escala de grisos"])},hide_account_hover_card:n=>{const{normalize:e}=n;return e(["Amaga la targeta de perfil flotant"])},hide_alt_indi_on_posts:n=>{const{normalize:e}=n;return e(["Amaga l'indicador «alt» a les publicacions"])},hide_boost_count:n=>{const{normalize:e}=n;return e(["Amaga el nombre d'impulsos"])},hide_favorite_count:n=>{const{normalize:e}=n;return e(["Amaga el nombre de preferits"])},hide_follower_count:n=>{const{normalize:e}=n;return e(["Amaga el nombre seguidors"])},hide_reply_count:n=>{const{normalize:e}=n;return e(["Amaga el nombre de respostes"])},hide_username_emojis:n=>{const{normalize:e}=n;return e(["Amaga els emojis dels noms d'usuari"])},label:n=>{const{normalize:e}=n;return e(["Configuració"])},title:n=>{const{normalize:e}=n;return e(["Funcions experimentals"])},user_picker:n=>{const{normalize:e}=n;return e(["Selector d'usuari"])}},profile:{appearance:{bio:n=>{const{normalize:e}=n;return e(["Biografia"])},description:n=>{const{normalize:e}=n;return e(["Edita la foto de perfil, nom d'usuari, perfil, etc."])},display_name:n=>{const{normalize:e}=n;return e(["Nom"])}},featured_tags:{description:n=>{const{normalize:e}=n;return e(["La gent pot trobar les publicacions visibles amb estes etiquetes."])},label:n=>{const{normalize:e}=n;return e(["Etiquetes destacades"])}}},select_a_settings:n=>{const{normalize:e}=n;return e(["Selecciona una opció"])},users:{export:n=>{const{normalize:e}=n;return e(["Exporta els tokens de l'usuari"])},import:n=>{const{normalize:e}=n;return e(["Importa els tokens de l'usuari"])},label:n=>{const{normalize:e}=n;return e(["Usuaris iniciats"])}}},"share-target":{description:n=>{const{normalize:e}=n;return e(["Elk es pot configurar perquè pugues compartir contingut d'altres aplicacions, simplement instal·la Elk al teu dispositiu o ordinador i inicia la sessió."])},hint:n=>{const{normalize:e}=n;return e(["Per a compartir contingut amb Elk, Elk ha d'estar instal·lat i has d'iniciar la sessió."])}},state:{attachments_exceed_server_limit:n=>{const{normalize:e}=n;return e(["El nombre d'adjunts supera el límit per publicació."])},edited:n=>{const{normalize:e}=n;return e(["(editat)"])},editing:n=>{const{normalize:e}=n;return e(["S'està editant"])},loading:n=>{const{normalize:e}=n;return e(["S'està carregant..."])},publish_failed:n=>{const{normalize:e}=n;return e(["La publicació ha fallat"])},publishing:n=>{const{normalize:e}=n;return e(["S'està publicant"])},upload_failed:n=>{const{normalize:e}=n;return e(["La pujada ha fallat"])},uploading:n=>{const{normalize:e}=n;return e(["S'està pujant..."])}},status:{favourited_by:n=>{const{normalize:e}=n;return e(["Marcat com a preferit per"])},filter_show_anyway:n=>{const{normalize:e}=n;return e(["Mostra-ho igualment"])},img_alt:{dismiss:n=>{const{normalize:e}=n;return e(["Descarta"])},read:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Llig la descripció de: ",r(a(0))])}},poll:{ends:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["acaba en ",r(a(0))])},finished:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["finalitzada ",r(a(0))])}},replying_to:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["En resposta a ",r(a(0))])},spoiler_show_less:n=>{const{normalize:e}=n;return e(["Mostra'm menys"])},spoiler_show_more:n=>{const{normalize:e}=n;return e(["Mostra'm més"])},try_original_site:n=>{const{normalize:e}=n;return e(["Prova al lloc original"])}},status_history:{created:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["creat el ",r(a(0))])},edited:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["editat el ",r(a(0))])}},tab:{hashtags:n=>{const{normalize:e}=n;return e(["Etiquetes"])},media:n=>{const{normalize:e}=n;return e(["Multimèdia"])},notifications_all:n=>{const{normalize:e}=n;return e(["Totes"])},notifications_mention:n=>{const{normalize:e}=n;return e(["Mencions"])},posts_with_replies:n=>{const{normalize:e}=n;return e(["Amb respostes"])}},tag:{follow:n=>{const{normalize:e}=n;return e(["Segueix"])},follow_label:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Segueix l'etiqueta ",r(a(0))])}},time_ago_options:{day_future:n=>{const{normalize:e,interpolate:r,named:a,plural:o}=n;return o([e(["en 0 dies"]),e(["demà"]),e(["en ",r(a("n"))," dia"])])},just_now:n=>{const{normalize:e}=n;return e(["ara"])},month_future:n=>{const{normalize:e,interpolate:r,named:a,plural:o}=n;return o([e(["en 0 mesos"]),e(["el mes que ve"]),e(["en ",r(a("n"))," mesos"])])},second_future:n=>{const{normalize:e,interpolate:r,named:a,plural:o}=n;return o([e(["ara"]),e(["en ",r(a("n"))," segon"]),e(["en ",r(a("n"))," segons"])])},second_past:n=>{const{normalize:e,interpolate:r,named:a,plural:o}=n;return o([e(["ara"]),e(["fa ",r(a("n"))," segon"]),e(["fa ",r(a("n"))," segons"])])},short_day_future:n=>{const{normalize:e,interpolate:r,named:a}=n;return e(["en ",r(a("n"))," d"])},short_day_past:n=>{const{normalize:e,interpolate:r,named:a}=n;return e([r(a("n"))," d"])},short_hour_future:n=>{const{normalize:e,interpolate:r,named:a}=n;return e(["en ",r(a("n"))," h"])},short_hour_past:n=>{const{normalize:e,interpolate:r,named:a}=n;return e([r(a("n"))," h"])},short_minute_future:n=>{const{normalize:e,interpolate:r,named:a}=n;return e(["en ",r(a("n"))," min"])},short_minute_past:n=>{const{normalize:e,interpolate:r,named:a}=n;return e([r(a("n"))," min"])},short_month_future:n=>{const{normalize:e,interpolate:r,named:a}=n;return e(["en ",r(a("n"))," mes"])},short_month_past:n=>{const{normalize:e,interpolate:r,named:a}=n;return e([r(a("n"))," mes"])},short_week_past:n=>{const{normalize:e,interpolate:r,named:a}=n;return e([r(a("n")),"w"])},short_year_future:n=>{const{normalize:e,interpolate:r,named:a}=n;return e(["en ",r(a("n"))," a"])},short_year_past:n=>{const{normalize:e,interpolate:r,named:a}=n;return e([r(a("n"))," a"])},week_future:n=>{const{normalize:e,interpolate:r,named:a,plural:o}=n;return o([e(["en 0 setmanes"]),e(["la setmana que ve"]),e(["en ",r(a("n"))," setmanes"])])},year_future:n=>{const{normalize:e,interpolate:r,named:a,plural:o}=n;return o([e(["en 0 anys"]),e(["l'any que ve"]),e(["en ",r(a("n"))," anys"])])}},timeline:{show_new_items:n=>{const{normalize:e,interpolate:r,named:a,plural:o}=n;return o([e(["Mostra ",r(a("v"))," element nou"]),e(["Mostra ",r(a("v"))," element nou"]),e(["Mostra ",r(a("v"))," element nous"])])},view_older_posts:n=>{const{normalize:e}=n;return e(["És possible que no es mostren missatges antics d'altres instàncies."])}},title:{federated_timeline:n=>{const{normalize:e}=n;return e(["Línia de temps federada"])},local_timeline:n=>{const{normalize:e}=n;return e(["Línia de temps local"])}},tooltip:{add_content_warning:n=>{const{normalize:e}=n;return e(["Afig un avís de contingut"])},add_emojis:n=>{const{normalize:e}=n;return e(["Afig emojis"])},add_media:n=>{const{normalize:e}=n;return e(["Afig imatges, un vídeo o un àudio"])},add_publishable_content:n=>{const{normalize:e}=n;return e(["Afig contingut per a publicar"])},change_language:n=>{const{normalize:e}=n;return e(["Canvia la llengua"])},emoji:n=>{const{normalize:e}=n;return e(["Emojis"])},explore_links_intro:n=>{const{normalize:e}=n;return e(["Notícies que gent d'este i d'altres servidors de la xarxa descentralitzada comenta ara mateix."])},explore_posts_intro:n=>{const{normalize:e}=n;return e(["Publicacions d'este i d'altres servidors de la xarxa descentralitzada que estan guanyant popularitat en este servidor ara mateix."])},explore_tags_intro:n=>{const{normalize:e}=n;return e(["Etiquetes que estan guanyant popularitat entre la gent d'este i altres servidors de la xarxa descentralitzada ara mateix."])},open_editor_tools:n=>{const{normalize:e}=n;return e(["Ferramentes d'edició"])},publish_failed:n=>{const{normalize:e}=n;return e(["Tanca els missatges fallits a la part superior de l'editor per a tornar a publicar"])},toggle_bold:n=>{const{normalize:e}=n;return e(["Negreta"])},toggle_code_block:n=>{const{normalize:e}=n;return e(["Bloc de codi"])},toggle_italic:n=>{const{normalize:e}=n;return e(["Cursiva"])}},user:{add_existing:n=>{const{normalize:e}=n;return e(["Afig un compte existent"])},server_address_label:n=>{const{normalize:e}=n;return e(["Adreça del servidor de Mastodon"])},sign_in_desc:n=>{const{normalize:e}=n;return e(["Inicia la sessió per a seguir perfils o etiquetes, marcar com a preferides, compartir i respondre a les publicacions, o interactuar des d'un compte en un servidor diferent."])},sign_in_notice_title:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Veient les dades públiques de: ",r(a(0))])},sign_out_account:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Tanca ",r(a(0))])},tip_no_account:n=>{const{normalize:e,interpolate:r,list:a}=n;return e(["Si encara no tens un compte de Mastodon, ",r(a(0)),"."])},tip_register_account:n=>{const{normalize:e}=n;return e(["tria un servidor i registra't"])}},visibility:{direct_desc:n=>{const{normalize:e}=n;return e(["Visible només per als usuaris mencionats"])},private:n=>{const{normalize:e}=n;return e(["Només a seguidors"])},public_desc:n=>{const{normalize:e}=n;return e(["Visible per a tots"])},unlisted_desc:n=>{const{normalize:e}=n;return e(["Visible per a tots, però sense mostrar-ho en les funcions de descobriment"])}}};export{t as default};