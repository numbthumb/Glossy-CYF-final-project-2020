import React, { useEffect, useState } from "react";

function SideBarTest() {

    useEffect(() => {
        fetch("http://192.168.1.118:3001/api/language")
            .then((res) => res.json())
            .then((date) => {
                console.log(data);
            });
    }, []);
  
  return (
      <div>
          <span>Test</span>
      </div>
  );
}

export default SideBarTest;
