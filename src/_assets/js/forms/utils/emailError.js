'use strict';

const MAX_EMAIL_LENGTH = 254;
const MAX_PRE_AMP_LENGTH = 64;
const MAX_HOSTNAME_LENGTH = 255;
const MAX_PARTIAL_HOSTNAME_LENGTH = 63;

module.exports = (email) => {
    email = email.toString();

    // At sign required
    if (email.indexOf('@') === -1)
    {
        return 'Must contain an @ sign';
    }

    // Something before the at sign required
    if (email.split('@')[0].length === 0)
    {
        return 'Must contain something before the @ sign';
    }

    // Must be less than 255 characters
    if (email.length > MAX_EMAIL_LENGTH)
    {
        return `Must have a maximum of ${MAX_EMAIL_LENGTH} characters`;
    }

    // Dots must not come in pairs or at the beginning or end
    if ((/(?:(?:^\..+?)|(?:\.\..+?)|(?:\.))@/).test(email))
    {
        return 'Before the @ sign, dots must not be paired or on the edges';
    }

    // Handles all standard cases:
    //   Allows dot separators
    //   Allows ASCII letters and numbers
    //   Allows common meta punctuation: apostrophe, comma, underscore, dash, plus
    // Does NOT handle edge cases:
    //   Unicode characters (would require a library to do so)
    //   More unusual punctuation and spaces
    //   Quoted strings
    //   Comments surrounded by parentheses
    // Other errors prevented:
    //   Prevents starting and ending dots
    //   Prevents more than one dot in a row
    // Testing:
    //   Enter the regex into http://www.regexr.com/
    //   Set the flags for multi-line and global
    //   Copy paste the email examples from wikipedia:
    //     http://en.wikipedia.org/wiki/Email_address#Examples
    const localPartMatches = email.match(/^((?:[\w',\-+]+?\.)+?[\w',\-+]+?|[\w',\-+]+?)@/);

    // Did not match (2 because of the capturing group)
    if (localPartMatches === null || localPartMatches.length !== 2)
    {
        return 'Only valid characters can precede the @ sign';
    }

    // Must be less than 65 characters
    if (localPartMatches[1].length > MAX_PRE_AMP_LENGTH)
    {
        return `A maximum of ${MAX_PRE_AMP_LENGTH} characters can precede the @ sign`;
    }

    const hostnamePart = email.substr(localPartMatches[0].length);

    // Hostname required
    if (hostnamePart.length === 0)
    {
        return 'Must contain characters after the @ sign';
    }

    // Hostname must be less than 256 characters
    if (hostnamePart.length > MAX_HOSTNAME_LENGTH)
    {
        return `A maximum of ${MAX_HOSTNAME_LENGTH} can follow the @ sign`;
    }

    // Initial test for valid hostname characters, disregarding placement
    //   Only ASCII letters and numbers, dashes, and dots
    if (!(/^[\dA-Za-z\-.]+?$/).test(hostnamePart))
    {
        return 'Invalid characters found after the @ sign';
    }

    // Inappropriately positioned dots
    //   2 dots (or more) in a row
    //   Starts with dot
    //   Ends with dot
    if ((/(?:^\.)|(?:\.\.)|(?:\.$)/).test(hostnamePart))
    {
        return 'After the @ sign, dots must not be paired or on the edges';
    }

    var h;
    const hostnameSections = hostnamePart.split('.');
    const hostnameSectionCount = hostnameSections.length;

    for (h = 0; h < hostnameSectionCount; h += 1)
    {
        // Must be less than 64 characters
        if (hostnameSections[h].length > MAX_PARTIAL_HOSTNAME_LENGTH)
        {
            return `After the @ sign, each dot-separated section can have a maximum of ${MAX_PARTIAL_HOSTNAME_LENGTH} characters`;
        }

        // Inappropriately positioned dashes within dot-delimited sections
        //   Starts with dash
        //   Ends with dash
        if ((/(?:^-)|(?:-$)/).test(hostnameSections[h]))
        {
            return 'After the @ sign, each dot-separated section cannot have dashes on the edges';
        }
    }

    return '';
};
