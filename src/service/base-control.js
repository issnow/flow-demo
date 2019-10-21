export const getbases = () => {
  const map = [
    {
      name: "单行输入框",
      xtype: "input",
      caption: "单行输入框",
      placeholder: "请输入",
      maxLength: 200,
      captionMaxLength: 40,
      captionMinLength: 10,
      placeholderMaxLength: 20,
      required: false,
      labelPosition: "right",
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAG1BMVEVHcEwZHiYZHiUaHyMdKCgZHiYaISQYHiQZHiYtE7tIAAAACXRSTlMAZVUSCTQmQxxVUCeiAAAA7ElEQVQoz9WSTW7CQAxGTQIlSz6XDFumvUBSUYklpTkAkXqAgkTXmS5YE1Gp167HM8micwK+ReK8/DzbCtG9Z4oyhTMghRnwmcDeoEugW7jH1NP10bS97SJ8wDVjvdsCfI0eFr+vXyAxAdYl5Wqy5SZ3HD1isUuiAgeiOcJXsSZqSz9DFQ/eI52/8ThIFU6bptmrid7PNsAaGjHl375Q2AYoJoeny2uAMF8SZ8TxPIiKsIyeaQIa4HzQVfVqvIzNzNBpdVTYhgXlWGT4mP5Ce/MD+lhT6D7Ao0feYDoBq53lf+ve3uSpn7v5C/8Auc4hwIODgzAAAAAASUVORK5CYII=",
      icon: "&#xe610;",
      volidatorRule: {
        requiredMessage: "请输入",
        maxlengthMeaasage: "超过最大长度",
        trigger: "change"
      },
      defaultValue: ""
    },
    {
      name: "多行输入框",
      xtype: "textarea",
      maxLength: 10000,
      caption: "多行输入框",
      placeholder: "请输入",
      captionMaxLength: 40,
      captionMinLength: 10,
      placeholderMaxLength: 20,
      required: false,
      labelPosition: "right",
      rows: 2,
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUZHiVHcEwYHCYZHiQaHiYdHSEaHSQhLS17jR+UAAAACHRSTlNmADVSJRNDB3u7OmgAAACUSURBVCjPYxDEAhioICjC4IgpKMaQiClYYMyOKejgxIIpaFDKDCQVGMCACSIoyiZoEAhkQgFEUIhFUEERXaUwu2CAIbqZAYmCwqzogglmaclsaILiUONRBEXYQkNDDRxRBcVALndIRLW9gBHkU3ZUd4LcKCjMhKoS5BtBEWYqRwcWQQUGFACxnQEN4FZJm2QzVN0JAJnJMuKEusQeAAAAAElFTkSuQmCC",
      volidatorRule: {
        requiredMessage: "请输入",
        maxlengthMeaasage: "超过最大长度",
        trigger: "change"
      }
    },
    {
      name: "数字输入框",
      xtype: "number",
      caption: "数字输入框",
      placeholder: "请输入",
      captionMaxLength: 40,
      placeholderMaxLength: 20,
      unitMaxLength: 10,
      unit: "",
      required: false,
      labelPosition: "right",
      valueType: 0,
      float: 0,
      // 数值范围
      rangeMin: "",
      rangeMax: "",
      volidatorRule: {
        requiredMessage: "请输入",
        trigger: "change",
        // 自定义验证
        check: "custom"
      },
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAG1BMVEUZHiVHcEweHyYZHScZHiUYHiUhKSkZHiMZHyeFN1kHAAAACXRSTlNlABArT1wIPxx2kW44AAAA40lEQVQoz92Su2+CUBTGv8jL9QOLjEB0xxrDitWhI6HRWdKk6Ui7dJWlf7fnXKDYtIm7Zzjn3l++87gP8B/DXUA/GYPAxUEWC+CTJjwrDIBEHdB2YUWEhSMwdtpXHBnbbVROiBnWApsJmU2ZueTZIh6eAoHFljxZzFcmIKDCt5qMLdP/PNXuCtUa18wkSSOM8EGG+8Krr2Bsqw7YXUG/PIoP1zmqES6drrJmDNAvq/4S5qgH2Am/WrPtYS/UM8x+lEs8pmnKzEv8xhtqFno9jqjEtr+gDLoBXv4+x/v33fylm/ACBXhC6aliFlMAAAAASUVORK5CYII="
    },
    {
      name: "下拉菜单",
      xtype: "select",
      caption: "下拉菜单",
      placeholder: "请输入",
      captionMaxLength: 40,
      placeholderMaxLength: 20,
      required: false,
      labelPosition: "right",
      options: [{ text: "选项1" }, { text: "选项2" }],
      volidatorRule: {
        requiredMessage: "请选择",
        trigger: "change"
      },
      img:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU0LjEgKDc2NDkwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5kcm9wZG93bjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLpobXpnaIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Yib5bu66KGo5Y2VLeihqOWNleWItuS9nCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNC4wMDAwMDAsIC00NzkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNGNUY2RkEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjEyMTYiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMTQ1IiB3aWR0aD0iMzM4IiBoZWlnaHQ9Ijk4NyI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0i6L6T5YWl5aSN5Yi2LTE2IiBzdHJva2U9IiNEOUQ5RDkiIGZpbGw9IiNGRkZGRkYiIHg9IjE2LjUiIHk9IjQ3Mi41IiB3aWR0aD0iMTQ3IiBoZWlnaHQ9IjMxIiByeD0iNCI+PC9yZWN0PgogICAgICAgICAgICA8ZyBpZD0iZHJvcGRvd24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNC4wMDAwMDAsIDQ3OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJwb3J0YWxfT0EtT25DYWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4zNjUzODQ2Miw0LjQ5MDM4NDYyIEw1LjM2NTM4NDYyLDEzLjM3NSBMMy43NSwxMy4zNzUgTDMuNzUsNC40OTAzODQ2MiBMMy43NSwyLjg3NSBMMTQuMjUsMi44NzUgTDE0LjI1LDQuNDkwMzg0NjIgTDUuMzY1Mzg0NjIsNC40OTAzODQ2MiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNBNEE0QTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDAwMDAwLCA4LjEyNTAwMCkgcm90YXRlKC00OTUuMDAwMDAwKSB0cmFuc2xhdGUoLTkuMDAwMDAwLCAtOC4xMjUwMDApICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
    },
    {
      name: "单选框",
      xtype: "radio",
      caption: "单选框",
      placeholder: "请输入",
      captionMaxLength: 40,
      placeholderMaxLength: 100,
      type: 1,
      options: [{ text: "选项1" }, { text: "选项2" }, { text: "选项3" }],
      required: false,
      labelPosition: "right",
      volidatorRule: {
        requiredMessage: "请选择",
        trigger: "change"
      },
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAHlBMVEUYHiZHcEwnMTEZHSMbHiUZHyYbGyUYHCUZGyUaGiTzZ3XQAAAACnRSTlNmAAZQK10fRDcO712dBgAAAPJJREFUKM+Nk0EPwUAQhV9UqaNVxM0GcS0nbiXhXOIHkEjEDQfnJv4Akfi9dqctjTxiLrv92t15M/OKKgn8hOqx1x9Q7SLAPes8VDEkPJ2DM2A0316A1Rv24U7t2o1wyqAK3ElymR85OoUdjLO8dwxTeCi/xKhDOYG+vE2jg4nAnnt7w1a0FBgX8yWGnoUKizysQxvYgOjxAydZsTGwCS1aAdGocDSw7tgParb0gd0FCwPbntxvoWSMCwZeZRtYKGfCioHrkvRAwu7M8xdIj9NEVBIVT8ukDaGt402m46CD4yOmZqC24QbjVqSm5fb+4+94AgpfSS+2ESzdAAAAAElFTkSuQmCC"
    },
    {
      name: "多选框",
      xtype: "checkbox",
      caption: "多选框",
      placeholder: "请输入",
      captionMaxLength: 40,
      placeholderMaxLength: 20,
      type: 1,
      max: "",
      min: "",
      value: [],
      options: [{ text: "选项1" }, { text: "选项2" }, { text: "选项3" }],
      required: false,
      labelPosition: "right",
      volidatorRule: {
        requiredMessage: "请选择",
        trigger: "change"
      },
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAG1BMVEUZHiZHcEwYHCgYHiUZHSYZHiUfIyolJSUXHCUVEW/fAAAACXRSTlNlAB1dNyUQBkxicou6AAAA+klEQVQoz52TvRKCMAyAI9WTFeRnhfP0HNHBuQzu6jm4Vl5A3oDF9zZNglUvi3YBPr6QNA2QKAt+h8Xq7L5geQVcj/4dlhZoTfs3uARzWN8uDewCzCCu/TUdoH1Ba078sbyZjjCD/Zi3I9XDyvQjLJuIYdnsQ92dF8BHnwLMfTzCexxY1Q5zgsfoxVKYVDOCwzaIUC9iglwwixFm8LAIeVDETA5hincbN4r0CPSKK/UiBTK0xoko0Pu0exIlnBKhyqIkopJQZVFK4uKtYTGR4mmbGbCYyDa5IVY6IA3h1uXuo3Vqk9Xj0A9OPWJ9GNSx0QdMHUV9aP/9EZ69VkfnYpHYCAAAAABJRU5ErkJggg=="
    }
    // {
    //   name: "分割线",
    //   xtype: "divider",
    //   caption: "分割线",
    //   placeholder: "请输入",
    //   required: false,
    //   color: "#d9d9d9",
    //   dividerClassName: "solid-line",
    //   labelPosition: "right",
    //   img:
    //     "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMTggMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU0LjEgKDc2NDkwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT7liIblibLnur8gPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IumhtemdojEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLliJvlu7rooajljZUt6KGo5Y2V5Yi25L2cIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjkyLjAwMDAwMCwgLTQ3OS4wMDAwMDApIj4KICAgICAgICAgICAgPHJlY3QgZmlsbD0iI0Y1RjZGQSIgeD0iMCIgeT0iMCIgd2lkdGg9IjE0NDAiIGhlaWdodD0iMTIxNiI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIxNDUiIHdpZHRoPSIzMzgiIGhlaWdodD0iOTg3Ij48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSLovpPlhaXlpI3liLYtMjMiIHN0cm9rZT0iI0Q5RDlEOSIgZmlsbD0iI0ZGRkZGRiIgeD0iMTc0LjUiIHk9IjQ3Mi41IiB3aWR0aD0iMTQ3IiBoZWlnaHQ9IjMxIiByeD0iNCI+PC9yZWN0PgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTIuMDAwMDAwLCA0NzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNBNEE0QTYiIHg9IjEiIHk9IjgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
    // },
    // {
    //   name: "日期",
    //   xtype: "date",
    //   caption: "日期",
    //   defaultDate: false,
    //   dateType: "date",
    //   placeholder: "请选择日期",
    //   captionMaxLength: 40,
    //   required: false,
    //   labelPosition: "right",
    //   volidatorRule: {
    //     requiredMessage: "请选择",
    //     trigger: "change"
    //   },
    //   disabled: false,
    //   img:
    //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAG1BMVEUZHiVHcEwYHCNISEgZHyYYHycUHCwaJSUZICVNlGYDAAAACXRSTlNlAFEDVjYcC0MdqMEEAAAAy0lEQVQoz73TOw+CMBDA8VPEdrTUxypN3CVgXDU+4oivXRPjXDZGBhO/tkcLpiUqi/rf+C3XNgewF8F7vGz1V29tYOZoHNMnhkFGeIgFkvJQ4eAGjYzEgLmSdmCTIEZgIywQYxB+5uwENpLUE+AizggOInqQxEGyhQg+43E53WXMA40sPWvs3w00+z9Or0WJgerm6vZ1ODkW7b94zrDIxFM5vV1zJJ6KopePzH/5nnMbuzkOiY2yqXZpaaV2KYJK+dbxg22r4NOPUOkBusBGIdKfBoUAAAAASUVORK5CYII="
    // },
    // {
    //   name: "日期区间",
    //   xtype: "daterange",
    //   caption: "日期区间",
    //   placeholder: "请输入",
    //   captionMaxLength: 40,
    //   dateType: "daterange",
    //   dateDiff: true,
    //   required: false,
    //   labelPosition: "right",
    //   volidatorRule: {
    //     requiredMessage: "请选择",
    //     trigger: "change"
    //   },
    //   disabled: false,
    //   img:
    //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAG1BMVEUZHiVHcEwZHSIZHyYZIiQZHiYZHyYcHicYHyWJZRsxAAAACXRSTlNlAFFWCkU4I17EnVm3AAAA10lEQVQoz83Tvw8BMRQH8O/RHqNycUZ3CyMhrD2/5hrsJySMhxCjGPzd3suJtH7NvkvTT5qX5vUV6kPwHQ/LfFcfWmhEjlr+wmALz4gUFF/LBm4J4Rguok+YluPIiH1MaWlZjS8+YUe4NXWREJFSqZdjxVeqigfOdjmGawvt/AsGp03yhmegRMt0YWHIPZorlRUsbEAaUDOa0sIMu6CD4ZFrPDGlEyMuEVlofH4ooJhYOOH7hO3rUv1x67ou1hibwkVd4FlCzwl4lmp4SZeHduXa4OdHeMkd5fRAC6/z8FAAAAAASUVORK5CYII="
    // },
    // {
    //   name: "图片",
    //   xtype: "pic",
    //   caption: "图片",
    //   placeholder: "",
    //   captionMaxLength: 40,
    //   dateType: "pic",
    //   required: false,
    //   labelPosition: "right",
    //   volidatorRule: {
    //     requiredMessage: "请上传",
    //     trigger: "change"
    //   },
    //   img:
    //     "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT4gcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLliJvlu7rooajljZUt6KGo5Y2V5Yi25L2cLWNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5Mi4wMDAwMDAsIC0zNTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSItcGljdHVyZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkyLjAwMDAwMCwgMzUzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjI1LDE2Ljg3NSBDMS44MzU3ODY0NCwxNi44NzUgMS41LDE2LjUzOTIxMzYgMS41LDE2LjEyNSBMMS41LDIuNjI1IEMxLjUsMi4yMTA3ODY0NCAxLjgzNTc4NjQ0LDEuODc1IDIuMjUsMS44NzUgTDE1Ljc1LDEuODc1IEMxNi4xNjQyMTM2LDEuODc1IDE2LjUsMi4yMTA3ODY0NCAxNi41LDIuNjI1IEwxNi41LDE2LjEyNSBDMTYuNSwxNi41MzkyMTM2IDE2LjE2NDIxMzYsMTYuODc1IDE1Ljc1LDE2Ljg3NSBMMi4yNSwxNi44NzUgWiBNMywxNS4zNzUgTDE1LDE1LjM3NSBMMTUsMy4zNzUgTDMsMy4zNzUgTDMsMTUuMzc1IFogTTQuODc1LDUuMjUgTDcuMTI1LDUuMjUgTDcuMTI1LDcuNSBMNC44NzUsNy41IEw0Ljg3NSw1LjI1IFogTTEzLjUsOS4xNTYzNjk1OCBMMTMuNSwxMy44NzUgTDksMTMuODc1IEwxMy41LDkuMTU2MzY5NTggWiBNNy44NzUsMTAuNzYwMDEwOSBMOS4xMTY0NTM1NiwxMiBMNy41LDEzLjg3NSBMNC44NzUsMTMuODc1IEw3Ljg3NSwxMC43NjAwMTA5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0E0QTRBNiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
    // },
    // {
    //   name: "说明文字",
    //   xtype: "text",
    //   caption: "请输入说明文字",
    //   placeholder: "请输入说明文字",
    //   url: "",
    //   hidden: false,
    //   required: false,
    //   labelPosition: "right",
    //   volidatorRule: {
    //     requiredMessage: "请输入"
    //   },
    //   img:
    //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAHlBMVEUZHiZHcEwnMTEZHCcZHSUcHyYZHyYZHSUcHCYYHCWYRM0AAAAACnRSTlNmAAYgUitdOA9EtOoRvAAAAQ1JREFUKM+N0zFrwkAUB/A/VRMz5oISNw9swa2hCLpJFx2NgvMpdM9QcLW0pautX9jLe3cxyqt4S7hfkncv770gFhZuovoc6ytUEwMER11HVYBWqGu4Bmar0TvwdsYhgmV5fTT486imQc7BOqapHQ4w9+d+4dXhIaqSUYeIsUN34x8KMUBO+BR82F2KsMTUbAmLVrlL0KQAi7BEhQ1FM/Rk3IW2mIDz+c44K2QWe9D1Cin8WuxyrHS3Y51uLPY5lj8oLh4s7luXuGhbfG5cot3/g+Lr4kEupQopJZe8R07efaZH/kxXEI9cELF0rsjqZVwvsmsHL98OsXFyi8VhEMdGHjB5FMWhlcf7jr/jBIMdTHb6vXXXAAAAAElFTkSuQmCC"
    // },
    // {
    //   name: "金额",
    //   xtype: "currency",
    //   caption: "金额",
    //   currencyType: "人民币",
    //   unit: "0",
    //   is_capital: true,
    //   placeholder: "请输入金额",
    //   captionMaxLength: 40,
    //   placeholderMaxLength: 20,
    //   required: false,
    //   labelPosition: "right",
    //   isChooseCurrency: false,
    //   float: 0,
    //   saytotal: "",
    //   // 数值范围
    //   rangeMin: "",
    //   rangeMax: "",
    //   volidatorRule: {
    //     requiredMessage: "请输入",
    //     trigger: "change",
    //     // 自定义验证
    //     check: "custom"
    //   },
    //   img:
    //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAHlBMVEUZHiZHcEwZHiUbHicYHSYrLi4ZHSQaHSYbHSIZHiXhmUgwAAAACnRSTlNlAEscNgUoVQ5Cg4TyJQAAAXNJREFUKM99kztTg0AQgFcgHHRuCEg6QC3sUNSxRCW90SRa4jj2l0LroGOP/mJ370Bg1NzMzdx9t+/dA/xjwTa4+pLi6HkIT0Ct/T58Azh4Or9qqYITMM7QR7yL4LKFfiSOtZ4n3XkD7/W71nlpYG130ZSuhhN47GDAWgRTiy4Vk5B27igYrREXJsN0hrhnMPSAXI8FefUhRnUFHBusCJ/0AmwkigneKM3S1ptsjAiWIz5OoVLSyEKAdcxHX6732C4ZcQlGOp3Uyk2dlEFQqtCXC4DZUoUvCHJE5FgttuTBf1Cph1mWmllWteqNI9w42DmqObqgKHKrKFhpyiGVO0ObuzbBDYc3SRIpkoQtpQ4XxB3arLkggarNDwypD1RkGffhWOh22H1YmgpOVU4N9Lh+wFVT5Vmp8Uq5ftz3TdfjAJxmGELp6gAwrEXVDtgtWLrvORx2o1iCuL54P5Xw2ptPP9e5W/PBeJMUSf/6CA8f23/HN0ApU/LeHm1vAAAAAElFTkSuQmCC"
    // },
    // {
    //   name: "附件",
    //   xtype: "attachment",
    //   caption: "附件",
    //   required: false,
    //   captionMaxLength: 40,
    //   multiple: true,
    //   labelPosition: "right",
    //   volidatorRule: {
    //     type: "array",
    //     requiredMessage: "请上传",
    //     trigger: "change"
    //   },
    //   img:
    //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAGFBMVEUYHiZHcEwYHiMbISUcHicjKSoYHiYaHSVZqXl3AAAACHRSTlNlAE4XJAc2RvTCh8wAAAEGSURBVCjPtZKxcsIwDIb/GqhXVGNYwx3spk8Ab5Ck184h0M6h7z9Uso3tUEbQ4NN9+WzLikB3Ag+Fn80/aAao71vYgeOQoNny0kKfe0wTdIrIVmpHtMcuQiPfW1x8uo7Q8Um20uHgSYCFyMJrgKVI8wBHIs21hyORam9m0Qrc+4uy6Pg1Fi8MbRINZpIdGK6yKNmg5ZmO12UQ/ZatwI731CqJqhFYrf2NhUiwODKclSLBSFfdtBQFchPfcO6yGE3DvyGL8Ux6B3f9KsbbiT6aLEqdk9ieJDKsr2kSGS5jd7Morat0MxYFtlINfSGJAu0A/dPDl5anbiEjhM3NKJpfqNPTxjvEHzyKSP4qWAGJAAAAAElFTkSuQmCC"
    // },
    // {
    //   name: "联系人",
    //   xtype: "linkMan",
    //   caption: "联系人",
    //   required: false,
    //   captionMaxLength: 40,
    //   placeholderMaxLength: 100,
    //   placeholder: "请输入联系人",
    //   labelPosition: "right",
    //   range: "all", // string all所有联系人， asign 指定联系人
    //   multiple: true,
    //   listId: [],
    //   userList: [],
    //   volidatorRule: {
    //     type: "array",
    //     requiredMessage: "请选择",
    //     trigger: "change"
    //   },
    //   img:
    //     "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5jb3N0X2FjY291bnQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWIm+W7uuihqOWNlS3ooajljZXliLbkvZwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzQuMDAwMDAwLCAtNTIxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iY29zdF9hY2NvdW50IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQuMDAwMDAwLCA1MjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5Zu+5qGIIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjEyNTAwMCwgMS4xMjUwMDApIiBmaWxsPSIjQTRBNEE2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjk4NDQyMTEzNSwxNS43NDkzMDc5IEMwLjQ0MDcyODQxOCwxNS43NDkzMDc5IDAsMTUuMzA4NjA0MSAwLDE0Ljc2NDk3NjEgQzAuMDAwMzUxNTQ4MTgxLDE0LjMzMzI0OTMgMC4wMDA2Mzg2NjgyNDksMTMuOTAxNTIyNCAwLjAwMDg2MTM2MDE5NCwxMy40Njk3OTU1IEMwLjAwMDg2MTM2MDE5NCwxMi4xMDg0ODAxIDEuNDcwMTU2MDMsMTEuMDA0NDI5IDMuOTQ5MDY2ODksOS44MjA4NDY5OCBDNC41MjI3MDc1Myw5LjU0Mzc3Mjk4IDUuNDMyNTg3MSw5LjIxODQ0MTg1IDUuNjU5NTQ0NzQsOS4xMDU2Njg0NiBDNS42ODM0NDc3Miw5LjAwODk4ODYyIDQuODU2NTk1NDksNy45NjQzNjY1NSA0Ljc1OTAxNDc1LDcuODIxOTYxNDQgQzQuMDI5NTg5NDYsNi43NTY1NzYxMyAzLjgwNjA0ODk2LDUuNjMxNjg0OSAzLjgwNjA0ODk0LDQuMzU4ODM2MjggQzMuODA2MDQ4OTQsMi42NzQxMjE3MyA0LjQyNzE4NzkxLDEuNDY2ODIzNDggNS40ODcxOTQxNCwwLjcyOTI2Njc3NCBDNi4yMDMxOTEzMSwwLjIzMTEwMjY0MiA3LjA2MTIyMiwwIDcuNjkzMDY2NTUsMCBMOC4wNTYxNjQxMiwwIEM4LjY4ODAzOTQzLDAgOS41NDYwNzAxMiwwLjIzMTExODAyMiAxMC4yNjIwMzY1LDAuNzI5MjY2Nzc0IEMxMS4zMjIxMDQzLDEuNDY2ODA4MSAxMS45NDMyMTI1LDIuNjc0MTIxNzUgMTEuOTQzMjEyNSw0LjM1ODgzNjI4IEMxMS45NDMyMTI1LDUuNjMyMTkyNDMgMTEuNzE5ODI1OCw2Ljc1NjYyMjI2IDEwLjk5MDIxNTksNy44MjIwMDc1NyBDMTAuODkyNzEyMSw3Ljk2NDQyODA3IDEwLjA2NTk5ODMsOS4wMDkwMTkzOCAxMC4wNTI0MDEsOS4wODczMTk4OSBDMTAuMDg2MjQwNCw5LjEwMzkzMDQ5IDExLjIyNDg5MjcsOS41NDMwOTYyNSAxMS43OTg5MzMzLDkuODIwMjQ3MTUgQzE0LjI3OTMzNjEsMTEuMDA0NTIxMyAxNS43NDg0MDAxLDEyLjEwODcxMDggMTUuNzQ4NDAwMSwxMy40Njk3OTU1IEwxNS43NSwxNC43NjQ5NzYxIEMxNS43NTAzODQzLDE1LjMwODYwNDEgMTUuMzA5OTMyNywxNS43NDk2MTU1IDE0Ljc2NjI3MDgsMTUuNzUgTDAuOTg0NDIxMTM1LDE1Ljc0OTMwNzkgWiBNMTQuNDM3MDk0NSwxNC40Mzc0ODM4IEwxNC40MzU5MDAxLDEzLjQ2OTc5NTUgQzE0LjQzNTkwMDEsMTIuOTA1NTY0OCAxMy41MDU5MDcxLDEyLjA4OTY3MTUgMTEuMjI4Mjc4NiwxMS4wMDIxOTg3IEMxMS4xMDI3MjM3LDEwLjk0MTU3OTkgMTAuOTI3MjI4OCwxMC44NjM0ODE5IDEwLjcxNDI3NTgsMTAuNzczMDk2MiBDMTAuNjcxMTc3OSwxMC43NTQ4MDM3IDEwLjYyNjczMDksMTAuNzM2MDg1NyAxMC41ODEwMDc2LDEwLjcxNjk2NyBDMTAuMjc1NzczMiwxMC41ODkzMzY3IDkuNTE3NTA5ODUsMTAuMjg2ODU3NSA5LjQ3NDA1OTQ2LDEwLjI2NTUyOTMgQzguOTUwNjYyOTksMTAuMDA4NjEyNCA4LjY1OTQ5NzA4LDkuNDM3MjEyOTUgOC43NTkyNTQzNiw4Ljg2Mjc1Nzg2IEM4LjgyMTg3MDY4LDguNjE2OTg0MjcgOC44MjE4NzA2OCw4LjYxNjk4NDI3IDguODY2MDk1MzQsOC41MjMzNDU3NCBDOC45MDE0NjM5NCw4LjQ1MTM1ODM5IDguOTAxNDYzOTQsOC40NTEzNTgzOSA4LjkyNjc3NjYsOC40MDY2NzE3OCBDOC45NTA3NDIyNyw4LjM2NDk1OTI5IDguOTc1MzY2MjIsOC4zMjU5ODk2NSA5LjAwMzI1MDg4LDguMjg0MTg3NDkgQzkuMDQwMTQwNTIsOC4yMjg4ODU4NiA5LjA4NDc4MjUzLDguMTY1ODE3MDYgOS4xMzk1NDU0Nyw4LjA5MDg0OTk2IEM5LjIyMzI3OTU5LDcuOTc2MjIzMTIgOS4zMjk4ODEyOCw3LjgzNDg1ODQ5IDkuNDcwMDcwODMsNy42NTE1NzQyOSBMOS40ODM2NTUxNSw3LjYzMzgyMDIxIEM5LjU0OTEzMDc0LDcuNTQ4Mjc1MjUgOS43NTQ1Nzc4NCw3LjI4MTAyMTA2IDkuNzc3NTAwOTcsNy4yNTExMTUyOSBDOS44NTQyOTE4MSw3LjE1MDkzMzA3IDkuOTA2MDk2NDQsNy4wODIxNzk4NCA5LjkwNzMxMzg0LDcuMDgwNDAxNjUgQzEwLjQyMDk2Niw2LjMzMDM2MDM4IDEwLjYzMDcxMjUsNS41MTI0MDE2MyAxMC42MzA3MTI1LDQuMzU4ODM2MjggQzEwLjYzMDcxMjUsMy4xMzU2ODk5MiAxMC4yMzg1ODU4LDIuMzExODY4NDcgOS41MTI0MjgwMiwxLjgwNjY0NDc3IEM5LjA2NjAxMzY1LDEuNDk2MDQyNTQgOC40ODA0NjAyOSwxLjMxMjUgOC4wNTYxNjQxMiwxLjMxMjUgTDcuNjkzMDY2NTUsMS4zMTI1IEM3LjI2ODc3OTE4LDEuMzEyNSA2LjY4MzIyNzMyLDEuNDk2MDM5MTMgNi4yMzY4MjY1OSwxLjgwNjYyODExIEM1LjUxMDY4NTA5LDIuMzExODgwMzUgNS4xMTg1NDg5NCwzLjEzNTcxOTAxIDUuMTE4NTQ4OTQsNC4zNTg4MzYyNiBDNS4xMTg1NDg5Niw1LjUxMTg2NTY3IDUuMzI4NDQxNTQsNi4zMzAzODI4NSA1Ljg0MTcxNDEyLDcuMDgwMDU5NjEgQzUuODQ1ODk3MDksNy4wODYxNjQwNiA2LjE1MjczMDE0LDcuNDg5NjUxMiA2LjI1NjI4MTYzLDcuNjI4MjQ0MTIgTDYuMjkxOTc3NzQsNy42NzYxMjgzIEM2LjQzMDQ1NDE3LDcuODYyMzI3MjggNi41NDEzMDI5Niw4LjAxNjYwMzYzIDYuNjI3OTU0MTQsOC4xNDYxNTkzNyBDNi42ODk0MjEzMSw4LjIzODA2MTQ1IDYuNzM5ODcxNDMsOC4zMTkwMTc1NCA2Ljc4MzIyNDE0LDguMzk4NzQyMTkgQzYuODIxMTM5ODYsOC40Njg0NjgzMyA2Ljg1MzkxNTQsOC41MzcxMTExIDYuODgzNjkyODIsOC42MTY4NzQ0OSBDNi45NzUwNzM5LDguODYxNjUyNzggNy4wMTY2NzUyNCw5LjA4NDk5NjMxIDYuOTMzNjgwMzQsOS40MjA2ODM4NiBDNi44NDExNTkyMiw5Ljc5NDkwMTk2IDYuNTg4ODA1MjUsMTAuMTA5NTI2MyA2LjI0MzU4ODA5LDEwLjI4MTA2MTggQzYuMDg3MjQxNzUsMTAuMzU4NzQ5MSA1LjA3OTcxNTc1LDEwLjc1Nzk3ODMgNS4wODc3MDI4MiwxMC43NTQ3MDUzIEM0Ljk4ODY2ODM4LDEwLjc5NTI4ODEgNC44OTgzNDgyNCwxMC44MzMxMzc1IDQuODE1MzE0MywxMC44Njg5NDY5IEM0LjcwMTE2OTk2LDEwLjkxODE3MzEgNC42MDIzNTA5LDEwLjk2Mjg4NzggNC41MTQ1ODA2MSwxMS4wMDUyNjY5IEMyLjI0MzExMDcyLDEyLjA4OTgwNCAxLjMxMzM2MTM2LDEyLjkwNTUxMjEgMS4zMTMzNjExOSwxMy40NzA0NzI1IEMxLjMxMzE5NDk2LDEzLjc5MjczNzkgMS4zMTI5OTI4NCwxNC4xMTUwMDMyIDEuMzEyNzU1MDEsMTQuNDM2ODI0NCBMMTQuNDM3MDk0NSwxNC40Mzc0ODM4IFoiIGlkPSLot6/lvoQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
    // },
    // {
    //   name: "富文本框",
    //   xtype: "richText",
    //   maxLength: 10000,
    //   caption: "富文本框",
    //   placeholder: "请输入",
    //   captionMaxLength: 40,
    //   captionMinLength: 10,
    //   placeholderMaxLength: 100,
    //   required: false,
    //   labelPosition: "right",
    //   rows: 2,
    //   img:
    //     "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlr4zmlofmnKzmqKoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTMuMDAwMDAwLCAtNTIzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3NC4wMDAwMDAsIDUxNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSItcGljdHVyZS1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTguMDAwMDAwLCA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIuMjUsMTYuODc1IEMxLjgzNTc4NjQ0LDE2Ljg3NSAxLjUsMTYuNTM5MjEzNiAxLjUsMTYuMTI1IEwxLjUsMi42MjUgQzEuNSwyLjIxMDc4NjQ0IDEuODM1Nzg2NDQsMS44NzUgMi4yNSwxLjg3NSBMMTUuNzUsMS44NzUgQzE2LjE2NDIxMzYsMS44NzUgMTYuNSwyLjIxMDc4NjQ0IDE2LjUsMi42MjUgTDE2LjUsMTYuMTI1IEMxNi41LDE2LjUzOTIxMzYgMTYuMTY0MjEzNiwxNi44NzUgMTUuNzUsMTYuODc1IEwyLjI1LDE2Ljg3NSBaIE0zLDE1LjM3NSBMMTUsMTUuMzc1IEwxNSwzLjM3NSBMMywzLjM3NSBMMywxNS4zNzUgWiBNNSw2IEwxMyw2IEwxMyw3IEw1LDcgTDUsNiBaIE01LDkgTDEzLDkgTDEzLDEwIEw1LDEwIEw1LDkgWiBNNSwxMiBMMTAsMTIgTDEwLDEzIEw1LDEzIEw1LDEyIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0E0QTRBNiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",
    //   volidatorRule: {
    //     requiredMessage: "请输入",
    //     trigger: "change"
    //   }
    // }
  ];
  return map;
};
