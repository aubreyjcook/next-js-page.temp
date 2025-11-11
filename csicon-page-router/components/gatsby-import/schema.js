import React from "react"
import { Helmet } from "react-helmet"

const SchemaMarkup = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "CSIConference",
          "description": "CSICon is the premiere conference in the US for science and skepticism. Don't miss out. Register today.",
          "image": "https://cdn.centerforinquiry.org/wp-content/uploads/sites/29/2024/04/10121848/CSICon2024_Banner_v1.png",
          "startDate": "2024-10-24",
          "endDate": "2024-10-27",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {		
            "@type": "Place",
            "name": "Horseshoe Las Vegas",
          }
        }
        `}
      </script>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org/", 
          "@type": "BreadcrumbList", 
          "itemListElement": [{
            "@type": "ListItem", 
            "position": 1, 
            "name": "Registration",
            "item": "https://csiconference.org/registration/"  
          },{
            "@type": "ListItem", 
            "position": 2, 
            "name": "Hotel Information",
            "item": "https://csiconference.org/hotel/"  
          }]
        }
        `}
      </script>
    </Helmet>
  )
}

export default SchemaMarkup
