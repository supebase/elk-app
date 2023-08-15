const i={a11y:{loading_page:e=>{const{normalize:n}=e;return n(["加载页面中，请稍后"])},loading_titled_page:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["加载",r(o(0)),"页面中，请稍后"])},locale_changed:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["语言已更改为",r(o(0))])},locale_changing:e=>{const{normalize:n}=e;return n(["更改语言中，请稍后"])},route_loaded:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["页面",r(o(0)),"已加载"])}},account:{avatar_description:e=>{const{normalize:n,interpolate:r,list:o}=e;return n([r(o(0))," 的头像"])},blocked_by:e=>{const{normalize:n}=e;return n(["您已被此用户拉黑"])},blocked_domains:e=>{const{normalize:n}=e;return n(["已拉黑的域名"])},blocked_users:e=>{const{normalize:n}=e;return n(["已拉黑的用户"])},blocking:e=>{const{normalize:n}=e;return n(["已拉黑"])},bot:e=>{const{normalize:n}=e;return n(["机器人"])},favourites:e=>{const{normalize:n}=e;return n(["喜欢的帖文"])},follow:e=>{const{normalize:n}=e;return n(["关注"])},follow_back:e=>{const{normalize:n}=e;return n(["回关"])},follow_requested:e=>{const{normalize:n}=e;return n(["已申请关注"])},followers:e=>{const{normalize:n}=e;return n(["关注者"])},followers_count:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["被 ",r(o(0))," 人关注"])},following:e=>{const{normalize:n}=e;return n(["正在关注"])},following_count:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["正在关注 ",r(o(0))," 人"])},follows_you:e=>{const{normalize:n}=e;return n(["已关注你"])},go_to_profile:e=>{const{normalize:n}=e;return n(["转到个人资料"])},joined:e=>{const{normalize:n}=e;return n(["已加入"])},moved_title:e=>{const{normalize:n}=e;return n(["的新账号是："])},muted_users:e=>{const{normalize:n}=e;return n(["已屏蔽的用户"])},muting:e=>{const{normalize:n}=e;return n(["已屏蔽"])},mutuals:e=>{const{normalize:n}=e;return n(["互相关注"])},notifications_on_post_disable:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["当 ",r(o("username"))," 发布时停止通知我"])},notifications_on_post_enable:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["当 ",r(o("username"))," 发布时通知我"])},pinned:e=>{const{normalize:n}=e;return n(["置顶的帖文"])},posts:e=>{const{normalize:n}=e;return n(["帖文"])},posts_count:e=>{const{normalize:n,interpolate:r,list:o}=e;return n([r(o(0))," 条帖文"])},profile_description:e=>{const{normalize:n,interpolate:r,list:o}=e;return n([r(o(0))," 的个人资料头图"])},profile_personal_note:e=>{const{normalize:n}=e;return n(["私人备注"])},profile_unavailable:e=>{const{normalize:n}=e;return n(["个人资料不可见"])},request_follow:e=>{const{normalize:n}=e;return n(["请求关注"])},unblock:e=>{const{normalize:n}=e;return n(["取消拉黑"])},unfollow:e=>{const{normalize:n}=e;return n(["取消关注"])},unmute:e=>{const{normalize:n}=e;return n(["取消屏蔽"])},view_other_followers:e=>{const{normalize:n}=e;return n(["其他站点上的关注者可能不会在这里显示。"])},view_other_following:e=>{const{normalize:n}=e;return n(["其他站点上正在关注的人可能不会在这里显示。"])}},action:{apply:e=>{const{normalize:n}=e;return n(["应用"])},bookmark:e=>{const{normalize:n}=e;return n(["收藏"])},bookmarked:e=>{const{normalize:n}=e;return n(["已收藏"])},boost:e=>{const{normalize:n}=e;return n(["转发"])},boost_count:e=>{const{normalize:n,interpolate:r,list:o}=e;return n([r(o(0))])},boosted:e=>{const{normalize:n}=e;return n(["已转发"])},clear_publish_failed:e=>{const{normalize:n}=e;return n(["清除发布失败信息"])},clear_upload_failed:e=>{const{normalize:n}=e;return n(["清除上传失败信息"])},close:e=>{const{normalize:n}=e;return n(["关闭"])},compose:e=>{const{normalize:n}=e;return n(["撰写"])},confirm:e=>{const{normalize:n}=e;return n(["确认"])},done:e=>{const{normalize:n}=e;return n(["完成"])},edit:e=>{const{normalize:n}=e;return n(["编辑"])},enter_app:e=>{const{normalize:n}=e;return n(["进入应用"])},favourite:e=>{const{normalize:n}=e;return n(["喜欢"])},favourite_count:e=>{const{normalize:n,interpolate:r,list:o}=e;return n([r(o(0))])},favourited:e=>{const{normalize:n}=e;return n(["已喜欢"])},more:e=>{const{normalize:n}=e;return n(["更多"])},next:e=>{const{normalize:n}=e;return n(["下一个"])},prev:e=>{const{normalize:n}=e;return n(["上一个"])},publish:e=>{const{normalize:n}=e;return n(["发布"])},reply:e=>{const{normalize:n}=e;return n(["回复"])},reply_count:e=>{const{normalize:n,interpolate:r,list:o}=e;return n([r(o(0))])},reset:e=>{const{normalize:n}=e;return n(["重置"])},save:e=>{const{normalize:n}=e;return n(["保存"])},save_changes:e=>{const{normalize:n}=e;return n(["保存更改"])},sign_in:e=>{const{normalize:n}=e;return n(["登鹿"])},sign_in_to:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["登鹿 ",r(o(0))])},switch_account:e=>{const{normalize:n}=e;return n(["切换帐号"])},vote:e=>{const{normalize:n}=e;return n(["投票"])}},app_desc_short:e=>{const{normalize:n}=e;return n(["一个灵巧的 Mastodon 客户端"])},app_logo:e=>{const{normalize:n}=e;return n(["应用图标"])},app_name:e=>{const{normalize:n}=e;return n(["鹿鸣"])},attachment:{edit_title:e=>{const{normalize:n}=e;return n(["描述"])},remove_label:e=>{const{normalize:n}=e;return n(["移除附件"])}},command:{activate:e=>{const{normalize:n}=e;return n(["执行"])},complete:e=>{const{normalize:n}=e;return n(["完成"])},compose_desc:e=>{const{normalize:n}=e;return n(["写一条新帖文"])},"n-people-in-the-past-n-days":e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["过去 ",r(o(1))," 天中 ",r(o(0))," 人访问"])},select_lang:e=>{const{normalize:n}=e;return n(["选择语言"])},sign_in_desc:e=>{const{normalize:n}=e;return n(["添加现有帐户"])},switch_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["切换到 ",r(o(0))])},switch_account_desc:e=>{const{normalize:n}=e;return n(["切换到另一个帐户"])},toggle_dark_mode:e=>{const{normalize:n}=e;return n(["切换深色模式"])},toggle_zen_mode:e=>{const{normalize:n}=e;return n(["切换禅模式"])}},common:{end_of_list:e=>{const{normalize:n}=e;return n(["列表到底啦"])},error:e=>{const{normalize:n}=e;return n(["错误"])},fetching:e=>{const{normalize:n}=e;return n(["加载中..."])},in:e=>{const{normalize:n}=e;return n(["在"])},no_bookmarks:e=>{const{normalize:n}=e;return n(["暂时没有收藏的帖文"])},no_favourites:e=>{const{normalize:n}=e;return n(["暂时没有喜欢的帖文"])},not_found:e=>{const{normalize:n}=e;return n(["无法找到相关内容"])},offline_desc:e=>{const{normalize:n}=e;return n(["您目前已离线，请检查网络连接。"])}},compose:{draft_title:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["草稿 ",r(o(0))])},drafts:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["草稿 (",r(o("v")),")"])}},confirm:{block_account:{cancel:e=>{const{normalize:n}=e;return n(["取消"])},confirm:e=>{const{normalize:n}=e;return n(["拉黑"])},title:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["你确定拉黑 ",r(o(0))," 吗？"])}},block_domain:{cancel:e=>{const{normalize:n}=e;return n(["取消"])},confirm:e=>{const{normalize:n}=e;return n(["拉黑"])},title:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["你确定拉黑域名 ",r(o(0))," 吗？"])}},common:{cancel:e=>{const{normalize:n}=e;return n(["否"])},confirm:e=>{const{normalize:n}=e;return n(["是"])}},delete_list:{cancel:e=>{const{normalize:n}=e;return n(["取消"])},confirm:e=>{const{normalize:n}=e;return n(["删除"])},title:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(['你确定要删除 "',r(o(0)),'" 列表吗？'])}},delete_posts:{cancel:e=>{const{normalize:n}=e;return n(["取消"])},confirm:e=>{const{normalize:n}=e;return n(["删除"])},title:e=>{const{normalize:n}=e;return n(["你确定要删除这条帖文吗？"])}},mute_account:{cancel:e=>{const{normalize:n}=e;return n(["取消"])},confirm:e=>{const{normalize:n}=e;return n(["屏蔽"])},title:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["你确定屏蔽 ",r(o(0))," 吗？"])}},show_reblogs:{cancel:e=>{const{normalize:n}=e;return n(["取消"])},confirm:e=>{const{normalize:n}=e;return n(["显示"])},title:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["你确定要显示来自 ",r(o(0))," 的转发吗？"])}},unfollow:{cancel:e=>{const{normalize:n}=e;return n(["取消"])},confirm:e=>{const{normalize:n}=e;return n(["取消关注"])},title:e=>{const{normalize:n}=e;return n(["你确定要取消关注吗？"])}}},conversation:{with:e=>{const{normalize:n}=e;return n(["与"])}},custom_cards:{stackblitz:{lines:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["行 ",r(o(0))])},open:e=>{const{normalize:n}=e;return n(["打开"])},snippet_from:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["来自 ",r(o(0))," 的片段"])}}},error:{account_not_found:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["未找到用户 ",r(o(0))])},"explore-list-empty":e=>{const{normalize:n}=e;return n(["目前没有热门话题，稍后再来看看吧！"])},file_size_cannot_exceed_n_mb:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["文件大小不能超过 ",r(o(0)),"MB"])},sign_in_error:e=>{const{normalize:n}=e;return n(["无法连接服务器"])},status_not_found:e=>{const{normalize:n}=e;return n(["未找到帖文"])},unsupported_file_format:e=>{const{normalize:n}=e;return n(["不支持的文件格式"])}},help:{build_preview:{desc1:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["您当前正在查看来自社区的鹿鸣预览版 - ",r(o(0)),"。"])},desc2:e=>{const{normalize:n}=e;return n(["可能包含未经审查甚至恶意的更改。"])},desc3:e=>{const{normalize:n}=e;return n(["请不要使用真实账号登录"])},title:e=>{const{normalize:n}=e;return n(["预览部署"])}},desc_highlight:e=>{const{normalize:n}=e;return n(["可能会在某些地方出现一些 bug 或缺失的功能。"])},desc_para1:e=>{const{normalize:n}=e;return n(["感谢你有兴趣尝试鹿鸣，一个我们正在积极开发的通用 Mastodon 客户端。"])},desc_para2:e=>{const{normalize:n}=e;return n(["我们正在努力开发中，并随着时间的推移不断完善。"])},desc_para3:e=>{const{normalize:n}=e;return n(["为了帮助促进开发，你可以通过以下链接赞助我们的团队成员。希望你喜欢鹿鸣！"])},desc_para4:e=>{const{normalize:n}=e;return n(["鹿鸣是开源的，如果你愿意帮助测试、提供反馈或作出贡献，"])},desc_para5:e=>{const{normalize:n}=e;return n(["在 GitHub 上联系我们"])},desc_para6:e=>{const{normalize:n}=e;return n(["来参与其中。"])},footer_team:e=>{const{normalize:n}=e;return n(["鹿鸣开发团队"])},title:e=>{const{normalize:n}=e;return n(["预览鹿鸣！"])}},language:{search:e=>{const{normalize:n}=e;return n(["搜索"])}},list:{add_account:e=>{const{normalize:n}=e;return n(["向列表中添加用户"])},cancel_edit:e=>{const{normalize:n}=e;return n(["取消编辑"])},clear_error:e=>{const{normalize:n}=e;return n(["清空错误"])},create:e=>{const{normalize:n}=e;return n(["创建"])},delete:e=>{const{normalize:n}=e;return n(["删除列表"])},delete_error:e=>{const{normalize:n}=e;return n(["删除列表时出现了一个错误"])},edit:e=>{const{normalize:n}=e;return n(["编辑列表"])},edit_error:e=>{const{normalize:n}=e;return n(["更新列表时出现了一个错误"])},error:e=>{const{normalize:n}=e;return n(["创建列表时出现了一个错误"])},error_prefix:e=>{const{normalize:n}=e;return n(["错误："])},list_title_placeholder:e=>{const{normalize:n}=e;return n(["列表标题"])},modify_account:e=>{const{normalize:n}=e;return n(["修改列表中的用户"])},remove_account:e=>{const{normalize:n}=e;return n(["移除列表中的用户"])},save:e=>{const{normalize:n}=e;return n(["保存更改"])}},magic_keys:{dialog_header:e=>{const{normalize:n}=e;return n(["快捷键"])},groups:{actions:{boost:e=>{const{normalize:n}=e;return n(["转发"])},command_mode:e=>{const{normalize:n}=e;return n(["命令面板"])},compose:e=>{const{normalize:n}=e;return n(["撰写"])},favourite:e=>{const{normalize:n}=e;return n(["喜欢"])},title:e=>{const{normalize:n}=e;return n(["操作"])}},media:{title:e=>{const{normalize:n}=e;return n(["媒体"])}},navigation:{go_to_home:e=>{const{normalize:n}=e;return n(["首页"])},go_to_notifications:e=>{const{normalize:n}=e;return n(["通知"])},next_status:e=>{const{normalize:n}=e;return n(["下一条帖文"])},previous_status:e=>{const{normalize:n}=e;return n(["上一条帖文"])},shortcut_help:e=>{const{normalize:n}=e;return n(["快捷键帮助"])},title:e=>{const{normalize:n}=e;return n(["导航"])}}},sequence_then:e=>{const{normalize:n}=e;return n(["then"])}},menu:{add_personal_note:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["给 ",r(o(0))," 添加私人备注"])},block_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["拉黑 ",r(o(0))])},block_domain:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["拉黑域名 ",r(o(0))])},copy_link_to_post:e=>{const{normalize:n}=e;return n(["复制这篇帖文的链接"])},copy_original_link_to_post:e=>{const{normalize:n}=e;return n(["复制这篇贴文的原始链接"])},delete:e=>{const{normalize:n}=e;return n(["删除"])},delete_and_redraft:e=>{const{normalize:n}=e;return n(["删除并重新编辑"])},direct_message_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["私信 ",r(o(0))])},edit:e=>{const{normalize:n}=e;return n(["编辑"])},hide_reblogs:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["隐藏来自 ",r(o(0))," 的转发"])},mention_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["提及 ",r(o(0))])},mute_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["屏蔽 ",r(o(0))])},mute_conversation:e=>{const{normalize:n}=e;return n(["静音这条帖文"])},open_in_original_site:e=>{const{normalize:n}=e;return n(["从源站打开"])},pin_on_profile:e=>{const{normalize:n}=e;return n(["置顶在个人资料上"])},remove_personal_note:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["给 ",r(o(0))," 移除私人备注"])},report_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["举报 ",r(o(0))])},share_post:e=>{const{normalize:n}=e;return n(["分享这条帖文"])},show_favourited_and_boosted_by:e=>{const{normalize:n}=e;return n(["展示谁喜欢和转发了"])},show_reblogs:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["显示来自 ",r(o(0))," 的转发"])},show_untranslated:e=>{const{normalize:n}=e;return n(["显示原文"])},toggle_theme:{dark:e=>{const{normalize:n}=e;return n(["切换深色模式"])},light:e=>{const{normalize:n}=e;return n(["切换浅色模式"])}},translate_post:e=>{const{normalize:n}=e;return n(["翻译帖文"])},unblock_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["解除拉黑 ",r(o(0))])},unblock_domain:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["解除拉黑域名 ",r(o(0))])},unfollow_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["取消关注 ",r(o(0))])},unmute_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["解除屏蔽 ",r(o(0))])},unmute_conversation:e=>{const{normalize:n}=e;return n(["取消静音帖子"])},unpin_on_profile:e=>{const{normalize:n}=e;return n(["取消置顶"])}},modals:{aria_label_close:e=>{const{normalize:n}=e;return n(["关闭"])}},nav:{back:e=>{const{normalize:n}=e;return n(["回退"])},blocked_domains:e=>{const{normalize:n}=e;return n(["已拉黑的域名"])},blocked_users:e=>{const{normalize:n}=e;return n(["已拉黑的用户"])},bookmarks:e=>{const{normalize:n}=e;return n(["书签"])},built_at:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["构建于 ",r(o(0))])},compose:e=>{const{normalize:n}=e;return n(["撰写"])},conversations:e=>{const{normalize:n}=e;return n(["私信"])},explore:e=>{const{normalize:n}=e;return n(["探索"])},favourites:e=>{const{normalize:n}=e;return n(["喜欢"])},federated:e=>{const{normalize:n}=e;return n(["跨站"])},home:e=>{const{normalize:n}=e;return n(["主页"])},list:e=>{const{normalize:n}=e;return n(["列表"])},lists:e=>{const{normalize:n}=e;return n(["列表"])},local:e=>{const{normalize:n}=e;return n(["本地"])},muted_users:e=>{const{normalize:n}=e;return n(["已屏蔽的用户"])},notifications:e=>{const{normalize:n}=e;return n(["通知"])},privacy:e=>{const{normalize:n}=e;return n(["隐私协议"])},profile:e=>{const{normalize:n}=e;return n(["个人资料"])},search:e=>{const{normalize:n}=e;return n(["搜索"])},select_feature_flags:e=>{const{normalize:n}=e;return n(["功能开关"])},select_font_size:e=>{const{normalize:n}=e;return n(["字体大小"])},select_language:e=>{const{normalize:n}=e;return n(["选择语言"])},settings:e=>{const{normalize:n}=e;return n(["设置"])},show_intro:e=>{const{normalize:n}=e;return n(["应用介绍"])},toggle_theme:e=>{const{normalize:n}=e;return n(["切换主题"])},zen_mode:e=>{const{normalize:n}=e;return n(["禅模式"])}},notification:{favourited_post:e=>{const{normalize:n}=e;return n(["点赞了你的帖文"])},followed_you:e=>{const{normalize:n}=e;return n(["关注了你"])},followed_you_count:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 人关注了你"])},missing_type:e=>{const{normalize:n}=e;return n(["未知的通知类型："])},reblogged_post:e=>{const{normalize:n}=e;return n(["转发了你的帖文"])},reported:e=>{const{normalize:n,interpolate:r,list:o}=e;return n([r(o(0))," 举报了 ",r(o(1))])},request_to_follow:e=>{const{normalize:n}=e;return n(["请求关注你"])},signed_up:e=>{const{normalize:n}=e;return n(["注册了"])},update_status:e=>{const{normalize:n}=e;return n(["更新了他们的状态"])}},placeholder:{content_warning:e=>{const{normalize:n}=e;return n(["写下你的警告"])},default_1:e=>{const{normalize:n}=e;return n(["在想些什么？"])},reply_to_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["回复 ",r(o(0))])},replying:e=>{const{normalize:n}=e;return n(["回复"])}},polls:{allow_multiple:e=>{const{normalize:n}=e;return n(["允许多选"])},cancel:e=>{const{normalize:n}=e;return n(["取消"])},create:e=>{const{normalize:n}=e;return n(["新建投票"])},disallow_multiple:e=>{const{normalize:n}=e;return n(["禁止多选"])},expiration:e=>{const{normalize:n}=e;return n(["投票截止至"])},hide_votes:e=>{const{normalize:n}=e;return n(["结束前隐藏投票总数"])},option_placeholder:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["投票项 ",r(o("current")),"/",r(o("max"))])},remove_option:e=>{const{normalize:n}=e;return n(["移除投票项"])},settings:e=>{const{normalize:n}=e;return n(["投票设置"])},show_votes:e=>{const{normalize:n}=e;return n(["始终显示投票结果"])}},pwa:{dismiss:e=>{const{normalize:n}=e;return n(["忽略"])},install:e=>{const{normalize:n}=e;return n(["安装"])},install_title:e=>{const{normalize:n}=e;return n(["安装鹿鸣"])},screenshots:{dark:e=>{const{normalize:n}=e;return n(["鹿鸣在深色模式下的快照"])},light:e=>{const{normalize:n}=e;return n(["鹿鸣在浅色模式下的快照"])}},title:e=>{const{normalize:n}=e;return n(["鹿鸣存在新的更新"])},update:e=>{const{normalize:n}=e;return n(["更新"])},update_available_short:e=>{const{normalize:n}=e;return n(["更新鹿鸣"])},webmanifest:{canary:{description:e=>{const{normalize:n}=e;return n(["一个灵巧的 Mastodon 客户端（Canary）"])},name:e=>{const{normalize:n}=e;return n(["鹿鸣 Canary"])},short_name:e=>{const{normalize:n}=e;return n(["鹿鸣 Canary"])}},dev:{description:e=>{const{normalize:n}=e;return n(["一个灵巧的 Mastodon 客户端（开发版）"])},name:e=>{const{normalize:n}=e;return n(["鹿鸣 开发版"])},short_name:e=>{const{normalize:n}=e;return n(["鹿鸣 开发版"])}},preview:{description:e=>{const{normalize:n}=e;return n(["一个灵巧的 Mastodon 客户端（预览版）"])},name:e=>{const{normalize:n}=e;return n(["鹿鸣 预览版"])},short_name:e=>{const{normalize:n}=e;return n(["鹿鸣 预览版"])}},release:{description:e=>{const{normalize:n}=e;return n(["一个灵巧的 Mastodon 客户端"])},name:e=>{const{normalize:n}=e;return n(["鹿鸣"])},short_name:e=>{const{normalize:n}=e;return n(["鹿鸣"])}}}},report:{additional_comments:e=>{const{normalize:n}=e;return n(["补充说明"])},another_server:e=>{const{normalize:n}=e;return n(["您所举报的用户来自另外的服务器"])},anything_else:e=>{const{normalize:n}=e;return n(["是否还有其他信息是您觉得我们应该知道的？"])},block_desc:e=>{const{normalize:n}=e;return n(["您将不再看见来自此用户的任何帖文。他们将不能看见您的帖文或者关注您。他们能够知道他们被拉黑了。"])},dontlike:e=>{const{normalize:n}=e;return n(["我不喜欢"])},dontlike_desc:e=>{const{normalize:n}=e;return n(["它不是您想看见的内容"])},forward:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["是的，将此次举报转发至 ",r(o(0))])},forward_question:e=>{const{normalize:n}=e;return n(["您是否希望将此次举报的匿名副本也发送给该服务器？"])},further_actions:{limit:{description:e=>{const{normalize:n}=e;return n(["以下是您控制所见内容的选项："])},title:e=>{const{normalize:n}=e;return n(["不想看到这个？"])}},report:{description:e=>{const{normalize:n}=e;return n(["您可以在我们审核期间执行以下操作："])},title:e=>{const{normalize:n}=e;return n(["感谢您的举报，我们将调查此事"])}}},limiting:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["限制 ",r(o(0))," 中"])},mute_desc:e=>{const{normalize:n}=e;return n(["您将不再看到来自此用户的任何帖文。他们仍然可以关注您并看到您的帖子。他们不会知道自己已被屏蔽。"])},other:e=>{const{normalize:n}=e;return n(["其他问题"])},other_desc:e=>{const{normalize:n}=e;return n(["该问题不属于以上分类"])},reporting:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["举报 ",r(o(0))," 中"])},select_many:e=>{const{normalize:n}=e;return n(["选择所有适用的选项："])},select_one:e=>{const{normalize:n}=e;return n(["选择最匹配的一项："])},select_posts:e=>{const{normalize:n}=e;return n(["是否存在帖文来证实此次举报？"])},select_posts_other:e=>{const{normalize:n}=e;return n(["是否存在其他帖文来证实此次举报？"])},spam:e=>{const{normalize:n}=e;return n(["这是垃圾信息"])},spam_desc:e=>{const{normalize:n}=e;return n(["恶意链接，虚假信息，或灌水回复"])},submit:e=>{const{normalize:n}=e;return n(["提交举报"])},unfollow_desc:e=>{const{normalize:n}=e;return n(["您将不再在您的主页动态看到来自此用户的任何帖子。但是您仍可能在其他地方看见他们的帖文。"])},violation:e=>{const{normalize:n}=e;return n(["违反了一条或多条服务器规则"])},whats_wrong_account:e=>{const{normalize:n}=e;return n(["告诉我们这个账号存在什么问题"])},whats_wrong_post:e=>{const{normalize:n}=e;return n(["告诉我们这条帖文存在什么问题"])}},search:{search_desc:e=>{const{normalize:n}=e;return n(["搜索用户或话题标签"])},search_empty:e=>{const{normalize:n}=e;return n(["无法找到符合这些搜索词的任何内容"])}},settings:{about:{built_at:e=>{const{normalize:n}=e;return n(["构建于"])},label:e=>{const{normalize:n}=e;return n(["关于"])},meet_the_team:e=>{const{normalize:n}=e;return n(["认识开发团队"])},sponsor_action:e=>{const{normalize:n}=e;return n(["赞助我们"])},sponsor_action_desc:e=>{const{normalize:n}=e;return n(["支持团队开发鹿鸣"])},sponsors:e=>{const{normalize:n}=e;return n(["赞助者"])},sponsors_body_1:e=>{const{normalize:n}=e;return n(["鹿鸣能够出现要感谢以下赞助者的慷慨赞助和帮助："])},sponsors_body_2:e=>{const{normalize:n}=e;return n(["以及赞助鹿鸣开发团队和成员的所有公司和个人。"])},sponsors_body_3:e=>{const{normalize:n}=e;return n(["如果你喜欢这个应用程序，请考虑赞助我们："])},version:e=>{const{normalize:n}=e;return n(["版本"])}},account_settings:{description:e=>{const{normalize:n}=e;return n(["在 Mastodon UI 中编辑你的账号设置"])},label:e=>{const{normalize:n}=e;return n(["账号设置"])}},interface:{color_mode:e=>{const{normalize:n}=e;return n(["颜色"])},dark_mode:e=>{const{normalize:n}=e;return n(["深色"])},default:e=>{const{normalize:n}=e;return n(["（默认）"])},font_size:e=>{const{normalize:n}=e;return n(["字号"])},label:e=>{const{normalize:n}=e;return n(["外观"])},light_mode:e=>{const{normalize:n}=e;return n(["浅色"])},system_mode:e=>{const{normalize:n}=e;return n(["跟随系统"])},theme_color:e=>{const{normalize:n}=e;return n(["主题颜色"])}},language:{display_language:e=>{const{normalize:n}=e;return n(["首选语言"])},label:e=>{const{normalize:n}=e;return n(["语言"])},status:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["翻译进度： ",r(o(0)),"/",r(o(1))," (",r(o(2)),"%)"])},translations:{add:e=>{const{normalize:n}=e;return n(["添加"])},choose_language:e=>{const{normalize:n}=e;return n(["选择语言"])},heading:e=>{const{normalize:n}=e;return n(["翻译"])},hide_specific:e=>{const{normalize:n}=e;return n(["隐藏指定的翻译"])},remove:e=>{const{normalize:n}=e;return n(["删除"])}}},notifications:{label:e=>{const{normalize:n}=e;return n(["通知"])},notifications:{label:e=>{const{normalize:n}=e;return n(["通知设置"])}},push_notifications:{alerts:{favourite:e=>{const{normalize:n}=e;return n(["喜欢的"])},follow:e=>{const{normalize:n}=e;return n(["新的关注者"])},mention:e=>{const{normalize:n}=e;return n(["提及"])},poll:e=>{const{normalize:n}=e;return n(["投票"])},reblog:e=>{const{normalize:n}=e;return n(["转发了你的帖文"])},title:e=>{const{normalize:n}=e;return n(["接收了什么通知？"])}},description:e=>{const{normalize:n}=e;return n(["当你没有在使用鹿鸣时也能接收通知。"])},instructions:e=>{const{normalize:n,linked:r,type:o}=e;return n(["不要忘记点击 ",r("settings.notifications.push_notifications.save_settings",void 0,o)," 按钮保存改动！"])},label:e=>{const{normalize:n}=e;return n(["推送通知设置"])},policy:{all:e=>{const{normalize:n}=e;return n(["任何人"])},followed:e=>{const{normalize:n}=e;return n(["我关注的人"])},follower:e=>{const{normalize:n}=e;return n(["关注我的人"])},none:e=>{const{normalize:n}=e;return n(["无人"])},title:e=>{const{normalize:n}=e;return n(["我可以从谁那里接收通知？"])}},save_settings:e=>{const{normalize:n}=e;return n(["保存设置改动"])},subscription_error:{clear_error:e=>{const{normalize:n}=e;return n(["清除错误"])},error_hint:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["你可以参考常见问题列表来尝试解决问题：",r(o(0)),"。"])},invalid_vapid_key:e=>{const{normalize:n}=e;return n(["VAPID 密钥无效。"])},permission_denied:e=>{const{normalize:n}=e;return n(["权限不足：请在你的浏览器中打开通知权限。"])},repo_link:e=>{const{normalize:n}=e;return n(["鹿鸣在 GitHub 上的仓库"])},request_error:e=>{const{normalize:n}=e;return n(["请求订阅时发生了一个错误，请再次尝试。如错误仍然存在，请到鹿鸣代码仓库中报告这一问题。"])},title:e=>{const{normalize:n}=e;return n(["无法订阅推送通知。"])},too_many_registrations:e=>{const{normalize:n}=e;return n(["由于浏览器限制，鹿鸣无法为不同服务器上的多个帐户使用推送通知服务。请取消订阅另一个帐户的推送通知，然后重试。"])},vapid_not_supported:e=>{const{normalize:n}=e;return n(["你的浏览器支持推送通知功能，但似乎没有实现 VAPID 协议。"])}},title:e=>{const{normalize:n}=e;return n(["推送通知设置"])},undo_settings:e=>{const{normalize:n}=e;return n(["撤销设置改动"])},unsubscribe:e=>{const{normalize:n}=e;return n(["禁用桌面通知"])},unsupported:e=>{const{normalize:n}=e;return n(["你的浏览器不支持桌面通知"])},warning:{enable_close:e=>{const{normalize:n}=e;return n(["关闭"])},enable_description:e=>{const{normalize:n}=e;return n(["若想在鹿鸣没有打开时接收通知，请启用推送通知功能。一旦启动，你可以通过上面的“前往通知设置”按钮来精确控制哪种类型的互动可以产生推送通知。"])},enable_description_desktop:e=>{const{normalize:n}=e;return n(["若想在鹿鸣没有打开时接收通知，请启用推送通知功能。一旦启动，你可以通过 “设置” > “通知” > “推送通知设置” 来精确控制哪种类型的互动可以产生桌面通知。"])},enable_description_mobile:e=>{const{normalize:n}=e;return n(["你也可以使用导航菜单 “设置” > “通知” > “推送通知设置” 访问设置页面。"])},enable_description_settings:e=>{const{normalize:n}=e;return n(["若想在鹿鸣没有打开时接收通知，请启用推送通知功能。一旦启动，你可以精确控制哪种类型的互动会在这个屏幕上产生推送通知。"])},enable_desktop:e=>{const{normalize:n}=e;return n(["启用推送通知"])},enable_title:e=>{const{normalize:n}=e;return n(["不错过任何事"])},re_auth:e=>{const{normalize:n}=e;return n(["您的服务器似乎不支持推送通知。尝试退出用户并重新登录。如果此消息仍然出现，请联系您服务器的管理员。"])}}},show_btn:e=>{const{normalize:n}=e;return n(["前往通知设置"])},under_construction:e=>{const{normalize:n}=e;return n(["建设中"])}},notifications_settings:e=>{const{normalize:n}=e;return n(["通知"])},preferences:{enable_autoplay:e=>{const{normalize:n}=e;return n(["开启自动播放"])},enable_data_saving:e=>{const{normalize:n}=e;return n(["启用数据流量节省"])},enable_data_saving_description:e=>{const{normalize:n}=e;return n(["通过阻止附件自动加载来节省数据流量。"])},enable_pinch_to_zoom:e=>{const{normalize:n}=e;return n(["启用双指缩放功能"])},github_cards:e=>{const{normalize:n}=e;return n(["GitHub 卡片"])},github_cards_description:e=>{const{normalize:n}=e;return n(["在一个 GitHub 链接被发布后，会显示一个可访问的HTML卡片，同时会使用社交图谱来替换掉社交形象"])},grayscale_mode:e=>{const{normalize:n}=e;return n(["灰色模式"])},hide_account_hover_card:e=>{const{normalize:n}=e;return n(["隐藏用户悬浮卡"])},hide_alt_indi_on_posts:e=>{const{normalize:n}=e;return n(["隐藏帖文上的描述按钮"])},hide_boost_count:e=>{const{normalize:n}=e;return n(["隐藏转发数"])},hide_favorite_count:e=>{const{normalize:n}=e;return n(["隐藏收藏数"])},hide_follower_count:e=>{const{normalize:n}=e;return n(["隐藏关注者数"])},hide_news:e=>{const{normalize:n}=e;return n(["隐藏新闻页"])},hide_reply_count:e=>{const{normalize:n}=e;return n(["隐藏回复数"])},hide_translation:e=>{const{normalize:n}=e;return n(["隐藏翻译"])},hide_username_emojis:e=>{const{normalize:n}=e;return n(["隐藏用户昵称的表情符号"])},hide_username_emojis_description:e=>{const{normalize:n}=e;return n(["隐藏时间线上用户的表情符号。表情符号仍然会在用户个人资料中展示。"])},label:e=>{const{normalize:n}=e;return n(["首选项"])},title:e=>{const{normalize:n}=e;return n(["实验功能"])},use_star_favorite_icon:e=>{const{normalize:n}=e;return n(["使用星形喜欢图标"])},user_picker:e=>{const{normalize:n}=e;return n(["用户选择器"])},user_picker_description:e=>{const{normalize:n}=e;return n(["在左下角展示所有已登录的用户头像用于快速切换账号。"])},virtual_scroll:e=>{const{normalize:n}=e;return n(["虚拟滚动"])},virtual_scroll_description:e=>{const{normalize:n}=e;return n(["在时间线上使用虚拟列表可以更加高效地渲染大量列表项。"])},wellbeing:e=>{const{normalize:n}=e;return n(["社交偏好"])},zen_mode:e=>{const{normalize:n}=e;return n(["禅模式"])},zen_mode_description:e=>{const{normalize:n}=e;return n(["直到鼠标悬浮在侧边栏之前隐藏它们。同样也会在时间线上隐藏一些元素。"])}},profile:{appearance:{bio:e=>{const{normalize:n}=e;return n(["简介"])},description:e=>{const{normalize:n}=e;return n(["编辑个人资料，例如头像、用户名、个人简介等。"])},display_name:e=>{const{normalize:n}=e;return n(["昵称"])},label:e=>{const{normalize:n}=e;return n(["个人资料"])},profile_metadata:e=>{const{normalize:n}=e;return n(["个人资料附加信息"])},profile_metadata_desc:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["这将会在个人资料页上以表格的形式展示，最多 ",r(o(0))," 个项目"])},profile_metadata_label:e=>{const{normalize:n}=e;return n(["描述"])},profile_metadata_value:e=>{const{normalize:n}=e;return n(["内容"])},title:e=>{const{normalize:n}=e;return n(["编辑个人资料"])}},featured_tags:{description:e=>{const{normalize:n}=e;return n(["人们可以在这些标签下浏览你的公共嘟文。"])},label:e=>{const{normalize:n}=e;return n(["精选话题标签"])}},label:e=>{const{normalize:n}=e;return n(["个人资料"])}},select_a_settings:e=>{const{normalize:n}=e;return n(["在左侧选择一个设置"])},users:{export:e=>{const{normalize:n}=e;return n(["导出用户令牌"])},import:e=>{const{normalize:n}=e;return n(["导入用户令牌"])},label:e=>{const{normalize:n}=e;return n(["当前用户"])}}},"share-target":{description:e=>{const{normalize:n}=e;return n(["只需要在你的设备或电脑上安装并登录鹿鸣，通过简单的配置，你就可以从其他应用中分享内容至鹿鸣。"])},hint:e=>{const{normalize:n}=e;return n(["为了分享内容至鹿鸣，你必须安装并登录鹿鸣。"])},title:e=>{const{normalize:n}=e;return n(["分享至鹿鸣"])}},state:{attachments_exceed_server_limit:e=>{const{normalize:n}=e;return n(["附件的数量超出了最大限制"])},attachments_limit_error:e=>{const{normalize:n}=e;return n(["超出每篇帖文的最大限制"])},edited:e=>{const{normalize:n}=e;return n(["（已编辑）"])},editing:e=>{const{normalize:n}=e;return n(["编辑中"])},loading:e=>{const{normalize:n}=e;return n(["加载中..."])},publish_failed:e=>{const{normalize:n}=e;return n(["发布失败"])},publishing:e=>{const{normalize:n}=e;return n(["发布中..."])},upload_failed:e=>{const{normalize:n}=e;return n(["上传失败"])},uploading:e=>{const{normalize:n}=e;return n(["上传中..."])}},status:{account:{suspended_message:e=>{const{normalize:n}=e;return n(["当前用户状态已被冻结"])},suspended_show:e=>{const{normalize:n}=e;return n(["仍然展示文本？"])}},boosted_by:e=>{const{normalize:n}=e;return n(["被转发"])},edited:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["在 ",r(o(0))," 编辑了"])},favourited_by:e=>{const{normalize:n}=e;return n(["被喜欢"])},filter_hidden_phrase:e=>{const{normalize:n}=e;return n(["筛选依据"])},filter_show_anyway:e=>{const{normalize:n}=e;return n(["仍然展示"])},img_alt:{ALT:e=>{const{normalize:n}=e;return n(["ALT"])},desc:e=>{const{normalize:n}=e;return n(["描述"])},dismiss:e=>{const{normalize:n}=e;return n(["关闭"])},read:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["查看 ",r(o(0))," 的描述"])}},poll:{count:e=>{const{normalize:n,interpolate:r,list:o}=e;return n([r(o(0))," 次投票"])},ends:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["将在 ",r(o(0))," 结束"])},finished:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["已在 ",r(o(0))," 结束"])}},replying_to:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["回复",r(o(0))])},show_full_thread:e=>{const{normalize:n}=e;return n(["显示完整贴文串"])},someone:e=>{const{normalize:n}=e;return n(["某人"])},spoiler_media_hidden:e=>{const{normalize:n}=e;return n(["隐藏的媒体内容"])},spoiler_show_less:e=>{const{normalize:n}=e;return n(["隐藏"])},spoiler_show_more:e=>{const{normalize:n}=e;return n(["显示更多"])},thread:e=>{const{normalize:n}=e;return n(["帖文串"])},try_original_site:e=>{const{normalize:n}=e;return n(["尝试从源站打开"])}},status_history:{created:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["在 ",r(o(0))," 发布了"])},edited:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["在 ",r(o(0))," 编辑了"])}},tab:{accounts:e=>{const{normalize:n}=e;return n(["用户"])},for_you:e=>{const{normalize:n}=e;return n(["推荐关注"])},hashtags:e=>{const{normalize:n}=e;return n(["话题标签"])},list:e=>{const{normalize:n}=e;return n(["列表"])},media:e=>{const{normalize:n}=e;return n(["媒体"])},news:e=>{const{normalize:n}=e;return n(["最新消息"])},notifications_all:e=>{const{normalize:n}=e;return n(["全部"])},notifications_mention:e=>{const{normalize:n}=e;return n(["提及"])},posts:e=>{const{normalize:n}=e;return n(["帖文"])},posts_with_replies:e=>{const{normalize:n}=e;return n(["帖文与留言"])}},tag:{follow:e=>{const{normalize:n}=e;return n(["关注"])},follow_label:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["关注 ",r(o(0))," 标签"])},unfollow:e=>{const{normalize:n}=e;return n(["取消关注"])},unfollow_label:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["取消关注 ",r(o(0))," 标签"])}},time_ago_options:{day_future:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["明天"]),n([r(o("n"))," 天后"])])},day_past:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["昨天"]),n([r(o("n"))," 天前"])])},hour_future:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["1 小时后"]),n([r(o("n"))," 小时后"])])},hour_past:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["1 小时前"]),n([r(o("n"))," 小时前"])])},just_now:e=>{const{normalize:n}=e;return n(["刚刚"])},minute_future:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["1 分钟后"]),n([r(o("n"))," 分钟后"])])},minute_past:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["1 分钟前"]),n([r(o("n"))," 分钟前"])])},month_future:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["下个月"]),n([r(o("n"))," 个月后"])])},month_past:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["上个月"]),n([r(o("n"))," 个月前"])])},second_future:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["刚刚"]),n([r(o("n"))," 秒后"]),n([r(o("n"))," 秒后"])])},second_past:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["刚刚"]),n([r(o("n"))," 秒前"]),n([r(o("n"))," 秒前"])])},short_day_future:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 天前"])},short_day_past:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 天前"])},short_hour_future:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 小时前"])},short_hour_past:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 小时前"])},short_minute_future:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 分钟前"])},short_minute_past:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 分钟前"])},short_month_future:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 个月前"])},short_month_past:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 个月前"])},short_second_future:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 秒前"])},short_second_past:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 秒前"])},short_week_future:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 周前"])},short_week_past:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 周前"])},short_year_future:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 年前"])},short_year_past:e=>{const{normalize:n,interpolate:r,named:o}=e;return n([r(o("n"))," 年前"])},week_future:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["下周"]),n([r(o("n"))," 周后"])])},week_past:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["上周"]),n([r(o("n"))," 周前"])])},year_future:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["明年"]),n([r(o("n"))," 年后"])])},year_past:e=>{const{normalize:n,interpolate:r,named:o,plural:t}=e;return t([n(["现在"]),n(["去年"]),n([r(o("n"))," 年前"])])}},timeline:{show_new_items:e=>{const{normalize:n,interpolate:r,named:o}=e;return n(["展示 ",r(o("v"))," 条新帖文"])},view_older_posts:e=>{const{normalize:n}=e;return n(["其他站点上更老的帖文可能不会在这里显示。"])}},title:{federated_timeline:e=>{const{normalize:n}=e;return n(["跨站时间线"])},local_timeline:e=>{const{normalize:n}=e;return n(["本地时间线"])}},tooltip:{add_content_warning:e=>{const{normalize:n}=e;return n(["添加内容警告标识"])},add_emojis:e=>{const{normalize:n}=e;return n(["添加表情符号"])},add_media:e=>{const{normalize:n}=e;return n(["添加图片、视频或者音频文件"])},add_publishable_content:e=>{const{normalize:n}=e;return n(["添加要发布的内容"])},change_content_visibility:e=>{const{normalize:n}=e;return n(["修改内容是否可见"])},change_language:e=>{const{normalize:n}=e;return n(["更改语言"])},emoji:e=>{const{normalize:n}=e;return n(["表情符号"])},explore_links_intro:e=>{const{normalize:n}=e;return n(["这些新闻故事正被本站和分布式网络上其他站点的用户谈论。"])},explore_posts_intro:e=>{const{normalize:n}=e;return n(["来自本站和分布式网络上其他站点的这些嘟文正在本站引起关注。"])},explore_tags_intro:e=>{const{normalize:n}=e;return n(["这些标签正在本站和分布式网络上其他站点的用户中引起关注。"])},open_editor_tools:e=>{const{normalize:n}=e;return n(["编辑器工具"])},pick_an_icon:e=>{const{normalize:n}=e;return n(["选择一个图标"])},publish_failed:e=>{const{normalize:n}=e;return n(["关闭编辑器上方的错误信息以重新发布帖文。"])},toggle_bold:e=>{const{normalize:n}=e;return n(["切换加粗"])},toggle_code_block:e=>{const{normalize:n}=e;return n(["切换代码块"])},toggle_italic:e=>{const{normalize:n}=e;return n(["切换斜体"])}},user:{add_existing:e=>{const{normalize:n}=e;return n(["添加现有帐户"])},server_address_label:e=>{const{normalize:n}=e;return n(["Mastodon 服务器地址"])},sign_in_desc:e=>{const{normalize:n}=e;return n(["登录后可关注其他人或标签、点赞、分享和回复帖文，或与不同服务器上的账号交互。"])},sign_in_notice_title:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["正在查看 ",r(o(0))," 的公共数据"])},sign_out_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["登出 ",r(o(0))])},single_instance_sign_in_desc:e=>{const{normalize:n}=e;return n(["登录后可关注其他人或标签、收藏、分享和回复帖文。"])},tip_no_account:e=>{const{normalize:n,interpolate:r,list:o}=e;return n(["如果您还没有 Mastodon 账户，",r(o(0)),"。"])},tip_register_account:e=>{const{normalize:n}=e;return n(["选择您的服务器并注册一个"])}},visibility:{direct:e=>{const{normalize:n}=e;return n(["私信"])},direct_desc:e=>{const{normalize:n}=e;return n(["仅对提及的用户可见"])},private:e=>{const{normalize:n}=e;return n(["仅限关注者"])},private_desc:e=>{const{normalize:n}=e;return n(["仅关注者可见"])},public:e=>{const{normalize:n}=e;return n(["公开"])},public_desc:e=>{const{normalize:n}=e;return n(["所有人可见"])},unlisted:e=>{const{normalize:n}=e;return n(["不列出"])},unlisted_desc:e=>{const{normalize:n}=e;return n(["对所有人可见，但不出现在公共时间线上"])}}};export{i as default};