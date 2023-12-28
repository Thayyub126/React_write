import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";

import Embed from "@editorjs/embed";

import Quote from "@editorjs/quote";

import Marker from "@editorjs/marker";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import Checklist from "@editorjs/checklist";
import InlineCode from "@editorjs/inline-code";
import Alert from "editorjs-alert";
import Header from "editorjs-header-with-alignment";
import SimpleImage from "simple-image-editorjs";
import Paragraph from "editorjs-paragraph-with-alignment";
import HeaderAnchor from "editorjs-header-with-anchor";
import ToggleBlock from "editorjs-toggle-block";
import Title from "title-editorjs";
import AIText from "@alkhipce/editorjs-aitext";
import NestedList from "@editorjs/nested-list";
import NestedChecklist from "@calumk/editorjs-nested-checklist";
import AttachesTool from "@editorjs/attaches";
import InlineImage from "editorjs-inline-image";
import EJLaTeX from "editorjs-latex";
import ImageGallery from "@rodrigoodhin/editorjs-image-gallery";
import TelegramPost from "editorjs-telegram-post";
import AudioPlayer from "editorjs-audio-player";
import Table from "editorjs-table";
import RawTool from "@editorjs/raw";

import CodeBox from "@bomdi/codebox";
import editorjsCodeflask from "@calumk/editorjs-codeflask";
import AnyButton from "editorjs-button";

import Underline from "@editorjs/underline";
import Hyperlink from "editorjs-hyperlink";
import TextSpolier from "editorjs-inline-spoiler-tool";
import Tooltip from "editorjs-tooltip";
import TextVariantTune from "@editorjs/text-variant-tune";

const Newstorie = () => {
  const editorRef = useRef(null);
  const editorInstance = useRef(null);

  useEffect(() => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        tools: {
          header: Header,

          list: List,

          SimpleImage: SimpleImage,
          embed: Embed,
          // table: Table,
          quote: Quote,
          // code: CodeTool,
          code: editorjsCodeflask,
          // code: Code,
          marker: Marker,
          link: Link,
          delimiter: Delimiter,
          warning: Warning,
          checklist: Checklist,
          inlineCode: InlineCode,
          headeranchor: HeaderAnchor,
          title: Title,
          nestedchecklist: NestedChecklist,
          imageGallery: ImageGallery,
          telegramPost: TelegramPost,
          audioPlayer: AudioPlayer,
          raw: RawTool,
          textVariant: TextVariantTune,
          underline: Underline,
          TextSpolier: TextSpolier,
          toggle: {
            class: ToggleBlock,
            inlineToolbar: true,
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          alert: {
            class: Alert,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+A",
            config: {
              defaultType: "primary",
              messagePlaceholder: "Enter something",
            },
          },
          aiText: {
            // if you do not use TypeScript you need to remove "as unknown as ToolConstructable" construction
            class: AIText,
            config: {
              openaiKey: "YOUR_OPEN_AI_KEY",
            },
          },
          listNested: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: "ordered",
            },
          },
          attaches: {
            class: AttachesTool,
            config: {
              endpoint: "http://localhost:3000/uploadFile",
            },
          },
          inlineimage: {
            class: InlineImage,
            inlineToolbar: true,
            config: {
              embed: {
                display: true,
              },
              unsplash: {
                appName: "your_app_name",
                clientId: "your_client_id",
              },
            },
          },
          Math: {
            class: EJLaTeX,
            shortcut: "CMD+SHIFT+M",
            config: {
              css: ".math-input-wrapper { padding: 5px; }",
            },
          },
          table: {
            class: Table,
            inlineToolbar: true,
          },
          codeBox: {
            class: CodeBox,
            config: {
              themeURL:
                "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css", // Optional
              themeName: "atom-one-dark", // Optional
              useDefaultTheme: "light", // Optional. This also determines the background color of the language select drop-down
            },
          },
          AnyButton: {
            class: AnyButton,
            inlineToolbar: false,
            config: {
              css: {
                btnColor: "btn-primary",
              },
            },
          },
          hyperlink: {
            class: Hyperlink,
            config: {
              shortcut: "CMD+L",
              target: "_blank",
              rel: "nofollow",
              availableTargets: ["_blank", "_self"],
              availableRels: ["author", "noreferrer"],
              validate: false,
            },
          },
          tooltip: {
            class: Tooltip,
            config: {
              location: "left",
              highlightColor: "#FFEFD5",
              underline: true,
              backgroundColor: "#154360",
              textColor: "#FDFEFE",
              holder: "editorId",
            },
          },
        },
        tunes: ["textVariant"],
        // ...other editor configuration...
      });
    }

    return () => {
      if (
        editorInstance.current &&
        typeof editorInstance.current.destroy === "function"
      ) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, []);

  const handlePublish = async () => {
    try {
      const savedData = await editorInstance.current.save(); // Get the content from Editor.js

      // Make a POST request to your API to save the content
      const apiUrl = "https://api.example.com/publish"; // Replace with your API endpoint
      const apiKey = "your_api_key"; // Replace with your API key

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(savedData), // Send the content data as JSON in the request body
      });

      if (!response.ok) {
        throw new Error("Failed to publish content");
      }

      console.log("Content published successfully");
    } catch (error) {
      console.error("Error publishing content:", error);
    }
  };

  return (
    <>
      <section className="stories-sec py-4">
        <div className="container">
          <div className="story-info-in mx-auto"></div>
        </div>
      </section>
      <div id="editorjs" ref={editorRef}></div>
    </>
  );
};

export default Newstorie;
