

export const FooterIcon = ({ linkSocialMedia, icon }) => {
  return (
    <div className="p-2">
        <a className="p-2 fs-2 text-white" href={linkSocialMedia}><i className={icon}></i></a>
    </div>
  )
}
