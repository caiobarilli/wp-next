<?php

    /**
    *
    *  Footer
    *
    */
    $wp_customize->add_panel('panel_footer', array(
        'capability'     => 'edit_theme_options',
        'theme_supports' => '',
        'title'          => __('Footer', 'custom_theme'),
        'description'    => '',
    ));

    /**
    *
    *  Conteudo Rodapé
    *
    */
     $wp_customize->add_section(
        'sec_footer',
        array(
            'title'			=> __('Copyright', 'custom_theme'),
            'description'	=> ' ',
            'panel' 		=> 'panel_footer',
        )
     );

    // Field 1 - Text Box
    $wp_customize->add_setting(
        'set_copy_footer',
        array(
            'type'      => 'theme_mod',
            'default'   => '',
        )
    );
    $wp_customize->add_control(
        'set_copy_footer',
        array(
            'label'				=> __('Texto do copyright', 'custom_theme'),
            'description'		=> __('Digite o texto copyright do rodapé', 'custom_theme'),
            'section'			=> 'sec_footer',
            'type'				=> 'text'
        )
    );