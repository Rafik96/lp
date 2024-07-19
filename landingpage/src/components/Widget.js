// src/components/Widget.js
import React, { useEffect } from 'react';
import './Widget.css'; // Plik CSS dla widgetu

const Widget = () => {
  useEffect(() => {
    (function($_x, _s, id) {
      var js, fjs = $_x.getElementsByTagName(_s)[0];
      if (!$_x.getElementById(id)) {
        js = $_x.createElement(_s);
        js.id = id;
        js.src = "//platform.docplanner.com/js/widget.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, "script", "zl-widget-s"));
  }, []);

  return (
    <a
      id="zl-url"
      className="zl-url"
      href="https://www.znanylekarz.pl/anna-maguder/psycholog/lodz"
      rel="nofollow"
      data-zlw-doctor="anna-maguder"
      data-zlw-type="big_with_calendar"
      data-zlw-opinion="false"
      data-zlw-hide-branding="true"
      data-zlw-saas-only="false"
    >
      Anna Maguder - ZnanyLekarz.pl
    </a>
  );
};

export default Widget;
