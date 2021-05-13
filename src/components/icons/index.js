import React from "react"
import PropTypes from "prop-types"

import IconLinkedIn from "./linkedin"
import IconMedium from "./medium"
import IconGitHub from "./github"
import IconBehance from "./behance"
import IconExternal from "./external"
import IconMail from "./mail"
import IconInsta from "./Instagram"
import IconTwitter from "./twitter"

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "medium":
      return <IconMedium color={color} />
    case "github":
      return <IconGitHub color={color} />
    case "behance":
      return <IconBehance color={color} />
    case "external":
      return <IconExternal color={color} />
    case "mail":
      return <IconMail color={color} />
    case "insta":
      return <IconInsta color={color} />
    case "twitter":
      return <IconTwitter color={color} />
    default:
      return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Icon
