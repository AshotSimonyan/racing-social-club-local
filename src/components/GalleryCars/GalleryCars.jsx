import React, { useEffect, useState } from 'react'
import { GalleryCarsStyle } from './GalleryCars.style'
import { Fade } from 'react-awesome-reveal'
import { Button } from '../UIKit'

function GalleryCars(props) {
  const [members, setMembers] = useState(null)

  useEffect(() => {
    fetch('https://discord.com/api/v9/invites/racingsocialclubnft?with_counts=true&with_expiration=true')
      .then(response => response.json())
      .then(data => setMembers(data.approximate_member_count))
  }, [])
  console.log(members)

  return (
    <GalleryCarsStyle>
      {/*carousel*/}
      <div className="wrapper-carousel">
      </div>

      <div className="wrapper-members">
        <div className="container">
          <div className="content">
            <Fade
              triggerOnce
              cascade
              direction={'up'}
              fraction={0.5}
              duration={1000}
            >
              <p>JOIN TO DISCORD COMMUNITY</p>

              <h1 className="title">{members || '29603'}MEMBER</h1>

              <p className="text">
                Racing Social Club will have a loyal and strong community,
                heading
                in to a very important part of the race.
              </p>

              <Button
                variant="outlined"
                href="https://discord.com/invite/racingsocialclubnft"
                target="_blank"
              >
                JOIN OUR DISCORD
              </Button>
            </Fade>
          </div>
        </div>
      </div>

      <div className="flag" />
    </GalleryCarsStyle>
  )
}

export default GalleryCars
