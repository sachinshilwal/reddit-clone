type WhitelistStatus = "all_ads" | string

interface Image {
  url: string
  width: number
  height: number
}

interface PreviewImage {
  source: Image
  resolutions: Image[]
  variants: unknown
  id: string
}

interface Awarding {
  giver_coin_reward: unknown
  subreddit_id: unknown
  is_new: boolean
  days_of_drip_extension: unknown
  coin_price: number
  id: string
  penny_donate: unknown
  award_sub_type: string
  coin_reward: number
  icon_url: string
  days_of_premium: unknown
  tiers_by_required_awardings: unknown
  resized_icons: Image[]
  icon_width: number
  static_icon_width: number
  start_date: unknown
  is_enabled: boolean
  awardings_required_to_grant_benefits: unknown
  description: string
  end_date: unknown
  subreddit_coin_reward: number
  count: number
  static_icon_height: number
  name: string
  resized_static_icons: Image[]
  icon_format: unknown
  icon_height: number
  penny_price: unknown
  award_type: string
  static_icon_url: string
}

interface PostData {
  approved_at_utc: unknown
  subreddit: string
  selftext: string
  author_fullname: string
  saved: boolean
  mod_reason_title: unknown
  gilded: number
  clicked: boolean
  title: string
  link_flair_richtext: Array<unknown>
  subreddit_name_prefixed: string
  hidden: boolean
  pwls: number
  link_flair_css_class: string
  downs: number
  thumbnail_height: number
  top_awarded_type: unknown
  hide_score: boolean
  name: string
  quarantine: boolean
  link_flair_text_color: string
  upvote_ratio: number
  author_flair_background_color: unknown
  ups: number
  total_awards_received: number
  media_embed: unknown
  thumbnail_width: number
  author_flair_template_id: unknown
  is_original_content: boolean
  user_reports: Array<unknown>
  secure_media: unknown
  is_reddit_media_domain: boolean
  is_meta: boolean
  category: unknown
  secure_media_embed: unknown
  link_flair_text: string
  can_mod_post: boolean
  score: number
  approved_by: unknown
  is_created_from_ads_ui: boolean
  author_premium: boolean
  thumbnail: string
  edited: boolean
  author_flair_css_class: unknown
  author_flair_richtext: Array<unknown>
  gildings: unknown
  post_hint: string
  content_categories: unknown
  is_self: boolean
  subreddit_type: string
  created: number
  link_flair_type: string
  wls: number
  removed_by_category: unknown
  banned_by: unknown
  author_flair_type: string
  domain: string
  allow_live_comments: boolean
  selftext_html: unknown
  likes: unknown
  suggested_sort: unknown
  banned_at_utc: unknown
  url_overridden_by_dest: string
  view_count: unknown
  archived: boolean
  no_follow: boolean
  is_crosspostable: boolean
  pinned: boolean
  over_18: boolean
  preview: {
    images: PreviewImage[]
    enabled: boolean
  }
  all_awardings: Awarding[]
  awarders: Array<unknown>
  media_only: boolean
  link_flair_template_id: string
  can_gild: boolean
  spoiler: boolean
  locked: boolean
  author_flair_text: unknown
  treatment_tags: Array<unknown>
  visited: boolean
  removed_by: unknown
  mod_note: unknown
  distinguished: unknown
  subreddit_id: string
  author_is_blocked: boolean
  mod_reason_by: unknown
  num_reports: unknown
  removal_reason: unknown
  link_flair_background_color: string
  id: string
  is_robot_indexable: boolean
  report_reasons: unknown
  author: string
  discussion_type: unknown
  num_comments: number
  send_replies: boolean
  whitelist_status: WhitelistStatus
  contest_mode: boolean
  mod_reports: Array<unknown>
  author_patreon_flair: boolean
  author_flair_text_color?: string
  permalink: string
  parent_whitelist_status: WhitelistStatus
  stickied: boolean
  url: string
  subreddit_subscribers: number
  created_utc: number
  num_crossposts: number
  media: unknown
  is_video: boolean
}

export default interface Post {
  kind: string
  data: PostData
}
