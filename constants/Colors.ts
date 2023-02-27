// light theme
const tintColorLight = "#0062C8";
const tintColorDark = "#649eff";
const boneWhite = "#F9F6EE";
const antiFlashWhiteClose = "#eef1f9";
// compliment to bone white

// dark theme colors
const slateGray = "#708090";
const darkSlateGray = "#2F4F4F";
const darkGray = "#121212";
// #2F4F4F
// solarized dark
// (dark theme)
const Base03 = "#002b36";
const Base02 = "#073642";
const Base01 = "#586e75";
const Base00 = "#657b83";
const Base0 = "#839496";
const Base1 = "#93a1a1";
const Base2 = "#eee8d5";
// (light theme)
const Base3 = "#fdf6e3";
const Yellow = "#b58900";
const Orange = "#cb4b16";
const Red = "#dc322f	";
const Magenta = "#d33682";
const Violet = "#6c71c4";
const Blue = "#268bd2";
const Cyan = "#2aa198";
const Green = "#859900";
const niceGrey = "#263238"

export default {
  light: {
    text: "#000",
    background: "#331800",
    audiotracksBGColor: darkGray,
    tint: tintColorLight,
    statusBarBackground: boneWhite,
    NavigationBackground: boneWhite,
    activityIndicatorColor: "#50C878",
    statusBarText: "#000",
    tabBackgroundColor: boneWhite,
    tabIconDefault: "gray",
    tabIconSelected: tintColorLight,
    buttonIconColor: darkGray,
    buttonBackgroundColor: boneWhite,
    buttonMode: "outlined",
    searchBarInputStyle: antiFlashWhiteClose,
    searchBarTextColor: "black",
    searchBarPlaceholderText: "black",
    searchBarInputContainerStyle: antiFlashWhiteClose,
    searchBarContainerStyle: boneWhite,
    searchBarBackground: boneWhite,
    searchBarClearIcon: "#000",
    searchBarSearchIcon: "#000",
    overlayBackgroundColor: boneWhite,
    bookshelfPickerBackground: boneWhite,
    bookshelfPickerBorderColor: "lightgrey",
    pickerBackgroundColor: antiFlashWhiteClose,
    pickerTextColor: "#000",
    pickerMode: "dropdown",
    pickerRippleColor: "grey",
    sliderThumbColor: Cyan,
    sliderTrackColor: Cyan,
    audiobookBackgroundColor: boneWhite,
    audiobookProgressColor: "#50C878",
    audiobookProgressTrackColor: "#DCDCDC",
    ratingBackgroundColor: "black",
    audiobookImageContainerColor: "#331800",
    colorAroundAudiobookImage: "#51361a",
    shelfIndicatorContainerBGColor: "#331800",
    shelveAudiobookIconColor:Yellow,
    audiotracksContainerColor: boneWhite,
    audiotracksTextContainerColor: boneWhite,
    reviewsContainerColor: boneWhite,
    reviewsWrapperColor: boneWhite,
    reviewsTitleBGColor: boneWhite,
    reviewsRatingTintColor: boneWhite,
    reviewsRatingBGColor: "#E2DFD2",
    reviewsBodyHighlightColor: boneWhite,
    reviewsBodyBGColor: boneWhite,
    reviewsFooterHighlightColor: boneWhite,
    reviewsFooterBGColor: boneWhite,
    reviewsDateHighlightColor: boneWhite,
    reviewsDateBGColor: boneWhite,
    bookCoverContainerBGColor: boneWhite,
    bookCoverWrapperColor: boneWhite,
    audiotrackHeaderBGColor: boneWhite,
    audioActivityIndicatorContainerBG: boneWhite,
    sectionsTitleColor: boneWhite,
    makeReviewTextBodyBG: "white",
    makeReviewTextBorderColor: "#000000",
    makeReviewTitleBG: "white",
    makeReviewTitleBorderColor: "#000000",
    audiotrackControlsBGColor: boneWhite,
    audiobookControlsTimeBGColor: boneWhite,
    sliderBGColor: boneWhite,
    imageAndCurrentlyPlayingInfoBGColor: boneWhite,
    listAccordionDropdownIconColor: "white",
    listAccordionDropdownBGColor: "#331800",
    listAccordionTextColor: "white",
    listAccordionTextHighlightColor: "#331800",
    accordionItemsTextColor: "white",
    accordionItemsBGColor: "#51361a",
    settingsIconsColor: "#000",
    settingsList: boneWhite,
    settingsBGColor: boneWhite,
    settingsTitleText: "white",
    settingsTitleBG: "#263238",
    settingsSubSectionTitles: "#009688",
  },
  dark: {
    text: boneWhite,
    background: darkGray,
    audiotracksBGColor: darkGray,
    tint: tintColorDark,
    statusBarBackground: darkGray,
    NavigationBackground: darkGray,
    activityIndicatorColor: "#50C878",
    statusBarText: "light",
    tabBackgroundColor: darkGray,
    tabIconDefault: boneWhite,
    tabIconSelected: tintColorDark,
    buttonIconColor: boneWhite,
    buttonBackgroundColor: Base03,
    buttonMode: "contained",
    searchBarInputStyle: Base03,
    searchBarInputContainerStyle: Base03,
    searchBarContainerStyle: darkGray,
    searchBarBackground: darkGray,
    searchBarClearIcon: boneWhite,
    searchBarSearchIcon: boneWhite,
    searchBarPlaceholderText: boneWhite,
    searchBarTextColor: boneWhite,
    overlayBackgroundColor: Base02,
    bookshelfPickerBackground: darkGray,
    bookshelfPickerBorderColor: darkSlateGray,
    pickerBackgroundColor: Base03,
    pickerTextColor: "white",
    pickerMode: "dropdown",
    pickerRippleColor: "white",
    pickerDropdownColor: "white",
    sliderThumbColor: Cyan,
    sliderTrackColor: Cyan,
    audiobookBackgroundColor: darkGray,
    audiobookProgressColor: "#50C878",
    audiobookProgressTrackColor: darkSlateGray,
    ratingBackgroundColor: "black",
    audiobookImageContainerColor: Base03,
    colorAroundAudiobookImage: Base02,
    shelfIndicatorContainerBGColor: Base03,
    shelveAudiobookIconColor:Yellow,
    audiotracksContainerColor: darkGray,
    audiotracksTextContainerColor: darkGray,
    audiotracksTextColor: boneWhite,
    reviewsContainerColor: darkSlateGray,
    reviewsWrapperColor: Base02,
    reviewsTitleBGColor: Base02,
    reviewsRatingTintColor: "black",
    reviewsRatingBGColor: Base01,
    reviewsBodyHighlightColor: Base02,
    reviewsBodyBGColor: Base02,
    reviewsFooterHighlightColor: Base02,
    reviewsFooterBGColor: Base02,
    reviewsDateHighlightColor: Base02,
    reviewsDateBGColor: Base02,
    bookCoverContainerBGColor: Base02,
    bookCoverWrapperColor: Base02,
    audiotrackHeaderBGColor: darkGray,
    audioActivityIndicatorContainerBG: darkGray,
    sectionsTitleColor: boneWhite,
    makeReviewTextBodyBG: Base03,
    makeReviewTextBorderColor: boneWhite,
    makeReviewTitleBG: Base03,
    makeReviewTitleBorderColor: boneWhite,
    audiotrackControlsBGColor: Base02,
    audiobookControlsTimeBGColor: Base02,
    sliderBGColor: Base02,
    imageAndCurrentlyPlayingInfoBGColor: Base02,
    listAccordionDropdownIconColor: "white",
    listAccordionDropdownBGColor: Base03,
    listAccordionTextColor: "white",
    listAccordionTextHighlightColor: Base03,
    accordionItemsTextColor: "white",
    accordionItemsBGColor: Base02,
    settingsIconsColor: boneWhite,
    settingsList: Base02,
    settingsListText: boneWhite,
    settingsBGColor: Base03,
    settingsTitleText: "white",
    settingsTitleBG: darkGray,
    settingsSubSectionTitles: Green,
  },
};
