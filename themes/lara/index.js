import palette from '@/components/lib/usetheme/primecss/utils/color/palette';

export default (options = {}) => {
    const { dark = false, condensed = false, fontFamily, fontSize, borderRadius, textColor, primaryColor, shade, css, variables } = options;

    return {
        global: {
            css: `:root { color-scheme: ${dark ? 'dark' : 'light'};}${css ?? ''}`,
            properties: {
                font: {
                    family: fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    size: fontSize || '14px',
                    weight: 'normal'
                },
                color: textColor || '#495057',
                borderRadius: borderRadius || '6px',
                gap: '0.5rem',
                transition: {
                    duration: '0.2s',
                    property: 'background-color, color, border-color, box-shadow'
                }
            },
            variables: {
                primaryColor: palette(primaryColor || '#3B82F6'),
                primaryColorText: '#ffffff',
                textColor: '#4b5563',
                textColorSecondary: '#6b7280',
                surface: {
                    a: '#ffffff',
                    b: '#f9fafb',
                    c: '#f3f4f6',
                    d: '#e5e7eb',
                    e: '#ffffff',
                    f: '#ffffff',
                    0: '#ffffff',
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827'
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827'
                },
                blue: palette('#3B82F6'),
                green: palette('#22C55E'),
                yellow: palette('#EAB308'),
                cyan: palette('#06B6D4'),
                pink: palette('#EC4899'),
                indigo: palette('#6366F1'),
                teal: palette('#14B8A6'),
                orange: palette('#F97316'),
                bluegray: palette('#64748B'),
                purple: palette('#A855F7'),
                red: palette('#FF3D32'),
                primary: palette(primaryColor || '#10b981'),
                /* @todo: change 'shade' name with 'palette' */
                shade: palette(shade) || {
                    '000': '#ffffff',
                    100: '#f9fafb',
                    200: '#f3f4f6',
                    300: '#e5e7eb',
                    400: '#d1d5db',
                    500: '#9ca3af',
                    600: '#6b7280',
                    700: '#4b5563',
                    800: '#374151',
                    900: '#1f2937'
                },
                ...variables
            }
        },
        panel: {
            root: {
                header: {
                    properties: {
                        color: '{global.primary.500}',
                        background: dark ? '{global.shade.800}' : '{global.shade.100}', // var(--p-shade-800)
                        padding: {
                            top: condensed ? '1.25rem' : '1.25rem',
                            right: condensed ? '1.25rem' : '1.25rem',
                            bottom: condensed ? '1.25rem' : '1.25rem',
                            left: condensed ? '1.25rem' : '1.25rem'
                        },
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: dark ? '{global.shade.600}' : '{global.shade.300}'
                        },
                        borderTop: {
                            rightRadius: '{global.borderRadius}',
                            leftRadius: '{global.borderRadius}'
                        }
                    },
                    children: {
                        title: {
                            properties: {
                                font: {
                                    size: 'medium',
                                    weight: 700
                                }
                            }
                        },
                        toggler: {
                            properties: {
                                width: '2rem',
                                height: '2rem',
                                color: dark ? '{global.shade.100}' : '{global.shade.600}',
                                background: 'transparent',
                                border: {
                                    width: 0,
                                    style: 'none',
                                    color: 'initial',
                                    radius: '50%'
                                },
                                transition: '{global.transition}'
                            },
                            compounds: {
                                enabled: {
                                    states: {
                                        hover: {
                                            properties: {
                                                color: dark ? '{global.shade.100}' : '{global.shade.800}',
                                                background: dark ? 'rgba(255,255,255,.03)' : '{global.shade.200}',
                                                border: {
                                                    width: 'inherit',
                                                    style: 'inherit',
                                                    color: 'transparent'
                                                }
                                            }
                                        },
                                        focusVisible: {
                                            properties: {
                                                outline: {
                                                    color: 'var(--p-primary-light-color)',
                                                    style: 'none',
                                                    width: 0,
                                                    offset: 0
                                                },
                                                boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                content: {
                    properties: {
                        color: dark ? '{global.shade.000}' : '#4b5563',
                        background: dark ? '{global.shade.800}' : '{global.shade.000}',
                        padding: {
                            top: condensed ? '1.25rem' : '1.25rem',
                            right: condensed ? '1.25rem' : '1.25rem',
                            bottom: condensed ? '1.25rem' : '1.25rem',
                            left: condensed ? '1.25rem' : '1.25rem'
                        },
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: dark ? '{global.shade.600}' : '{global.shade.300}'
                        },
                        borderTop: {
                            width: '0',
                            style: 'none',
                            color: 'transparent'
                        }
                    },
                    compounds: {
                        lastChild: {
                            properties: {
                                borderBottom: {
                                    rightRadius: '{global.borderRadius}',
                                    leftRadius: '{global.borderRadius}'
                                }
                            }
                        }
                    }
                },
                footer: {
                    properties: {
                        color: '{global.shade.700}',
                        background: '{global.shade.000}',
                        padding: {
                            top: condensed ? '0.75rem' : '0.75rem',
                            right: condensed ? '1.25rem' : '1.25rem',
                            bottom: condensed ? '0.75rem' : '0.75rem',
                            left: condensed ? '1.25rem' : '1.25rem'
                        },
                        border: {
                            width: '1px',
                            style: 'solid',
                            color: '{global.shade.300}'
                        },
                        borderTop: {
                            width: '0',
                            style: 'none',
                            color: 'transparent'
                        },
                        borderBottom: {
                            rightRadius: '{global.borderRadius}',
                            leftRadius: '{global.borderRadius}'
                        }
                    }
                },
                variants: {
                    toggleable: {
                        header: {
                            properties: {
                                padding: {
                                    top: condensed ? '0.75rem' : '0.75rem',
                                    right: condensed ? '1.25rem' : '1.25rem',
                                    bottom: condensed ? '0.75rem' : '0.75rem',
                                    left: condensed ? '1.25rem' : '1.25rem'
                                }
                            }
                        }
                    }
                }
            }
        }
    };
};
