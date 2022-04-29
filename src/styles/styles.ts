import colors from '@constants/colors';
import { StyleSheet } from 'react-native';
import { heading, letterSpacing, bodyText, captionText } from './size';

export default StyleSheet.create({
    h1: { fontFamily: "Poppins_700Bold", fontSize: heading.h1, letterSpacing },
    h2: { fontFamily: "Poppins_700Bold", fontSize: heading.h2, letterSpacing },
    h3: { fontFamily: "Poppins_700Bold", fontSize: heading.h3, letterSpacing },
    h4: { fontFamily: "Poppins_700Bold", fontSize: heading.h4, letterSpacing },
    h5: { fontFamily: "Poppins_700Bold", fontSize: heading.h5, letterSpacing },
    h6: { fontFamily: "Poppins_700Bold", fontSize: heading.h6, letterSpacing },
    // Large Text
    largeTextBoldBody: { fontFamily: "Poppins_700Bold", fontSize: bodyText.large, letterSpacing },
    largeTextRegularBody: { fontFamily: "Poppins_400Regular", fontSize: bodyText.large, letterSpacing },
    // Medium Text
    mediumTextBoldBody: { fontFamily: "Poppins_700Bold", fontSize: bodyText.medium, letterSpacing },
    mediumTextRegularBody: { fontFamily: "Poppins_400Regular", fontSize: bodyText.medium, letterSpacing },
    // Normal Text
    normalTextBoldBody: { fontFamily: "Poppins_700Bold", fontSize: bodyText.normal, letterSpacing },
    normalTextRegularBody: { fontFamily: "Poppins_400Regular", fontSize: bodyText.normal, letterSpacing },

    // Caption Text
    largeTextBoldCaption: { fontFamily: "Poppins_700Bold", fontSize: captionText.large, letterSpacing },
    largeTextRegularCaption: { fontFamily: "Poppins_400Regular", fontSize: captionText.large, letterSpacing },
    mediumTextBoldCaption: { fontFamily: "Poppins_700Bold", fontSize: captionText.medium, letterSpacing },
    mediumTextRegularCaption: { fontFamily: "Poppins_400Regular", fontSize: captionText.medium, letterSpacing },

    // Link Text
    linkText: { fontFamily: "Poppins_700Bold", fontSize: bodyText.normal, letterSpacing, color: colors.primary, },


});