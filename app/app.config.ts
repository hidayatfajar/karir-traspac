export default defineAppConfig({
  ui: {
    colors: {
      primary: "orange",
      neutral: "gray",
      success: "green",
    },
    table: {
      root: "relative overflow-auto",
      base: "min-w-full table-fixed h-[54px]",
      caption: "sr-only",
      thead: "relative",
      tbody:
        "divide-y divide-default [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary",
      tfoot: "relative",
      tr: "odd:bg-white even:bg-[#F2FAF5] dark:odd:bg-[#1F2937] dark:even:bg-[#374151]",
      th: "text-left rtl:text-right bg-[#069550] dark:bg-[#069550] first:rounded-tl-lg last:rounded-tr-lg px-4 py-3.5 text-white dark:text-white font-semibold text-sm whitespace-nowrap",
      td: "whitespace-nowrap first:text-center px-4 py-4 text-gray-500 dark:text-gray-400 font-normal text-sm",
      separator: "absolute z-[1] left-0 w-full h-px bg-(--ui-border-accented)",
      empty: "py-6 text-center text-sm text-muted",
      loading: "py-6 text-center",
      variants: {
        pinned: {
          true: {
            th: "sticky bg-default/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0",
            td: "sticky bg-default/75 data-[pinned=left]:left-0 data-[pinned=right]:right-0",
          },
        },
        sticky: {
          true: {
            thead: "sticky top-0 inset-x-0 bg-default/75 z-[1] backdrop-blur",
            tfoot:
              "sticky bottom-0 inset-x-0 bg-default/75 z-[1] backdrop-blur",
          },
          header: {
            thead: "sticky top-0 inset-x-0 bg-default/75 z-[1] backdrop-blur",
          },
          footer: {
            tfoot:
              "sticky bottom-0 inset-x-0 bg-default/75 z-[1] backdrop-blur",
          },
        },
        loading: {
          true: {
            thead: "after:absolute after:z-[1] after:h-px",
          },
        },
        loadingAnimation: {
          carousel: "",
          "carousel-inverse": "",
          swing: "",
          elastic: "",
        },
        loadingColor: {
          primary: "",
          secondary: "",
          success: "",
          info: "",
          warning: "",
          error: "",
          neutral: "",
        },
      },
      compoundVariants: [
        {
          loading: true,
          loadingColor: "primary",
          class: {
            thead: "after:bg-primary",
          },
        },
        {
          loading: true,
          loadingColor: "neutral",
          class: {
            thead: "after:bg-inverted",
          },
        },
        {
          loading: true,
          loadingAnimation: "carousel",
          class: {
            thead:
              "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]",
          },
        },
        {
          loading: true,
          loadingAnimation: "carousel-inverse",
          class: {
            thead:
              "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]",
          },
        },
        {
          loading: true,
          loadingAnimation: "swing",
          class: {
            thead: "after:animate-[swing_2s_ease-in-out_infinite]",
          },
        },
        {
          loading: true,
          loadingAnimation: "elastic",
          class: {
            thead: "after:animate-[elastic_2s_ease-in-out_infinite]",
          },
        },
      ],
      defaultVariants: {
        loadingColor: "primary",
        loadingAnimation: "carousel",
      },
    },
    button: {
      slots: {
        base: [
          "cursor-pointer disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75",
        ],
      },
    },
  },
});
