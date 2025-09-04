function t(){let t=document.activeElement;if(null==t)return null;for(;null!=t&&null!=t.shadowRoot&&null!=t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}export{t as g};
